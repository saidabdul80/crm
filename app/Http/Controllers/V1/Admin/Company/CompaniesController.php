<?php

namespace Crater\Http\Controllers\V1\Admin\Company;

use Crater\Http\Controllers\Controller;
use Crater\Http\Requests\CompaniesRequest;
use Crater\Http\Resources\CompanyResource;
use Crater\Models\Company;
use Crater\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Silber\Bouncer\BouncerFacade;
use Vinkla\Hashids\Facades\Hashids;

class CompaniesController extends Controller
{
    public function store(CompaniesRequest $request)
    {
        \DB::beginTransaction();
        try {
            $this->authorize('create', Company::class);
            
            $user = $request->user();

            $company = Company::create($request->validated());
            $company->unique_hash = Hashids::connection(Company::class)->encode($company->id);
            $company->save();
            $company->setupDefaultData();
            $user->companies()->attach($company->id);
            $user->assign('super admin');
            
            if ($request->filled('address')) {
                $company->address()->create($request->input('address'));
            }

            $response = Http::post(env('SAVE_COMPANY_WEBHOOK'), $company->toArray());

            \DB::commit();

            return new CompanyResource($company);
        } catch (\Exception $e) {
            \DB::rollBack();
            // Log the error or handle it as needed
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function destroy(Request $request)
    {
        $company = Company::find($request->header('company'));

        $this->authorize('delete company', $company);

        $user = $request->user();

        if ($request->name !== $company->name) {
            return respondJson('company_name_must_match_with_given_name', 'Company name must match with given name');
        }

        if ($user->loadCount('companies')->companies_count <= 1) {
            return respondJson('You_cannot_delete_all_companies', 'You cannot delete all companies');
        }

        $company->deleteCompany($user);

        return response()->json([
            'success' => true
        ]);
    }

    public function transferOwnership(Request $request, User $user)
    {
        $company = Company::find($request->header('company'));
        $this->authorize('transfer company ownership', $company);

        if ($user->hasCompany($company->id)) {
            return response()->json([
                'success' => false,
                'message' => 'User does not belongs to this company.'
            ]);
        }

        $company->update(['owner_id' => $user->id]);
        BouncerFacade::sync($user)->roles(['super admin']);

        return response()->json([
            'success' => true
        ]);
    }

    public function getUserCompanies(Request $request)
    {
        $companies = $request->user()->companies;

        return CompanyResource::collection($companies);
    }
}
