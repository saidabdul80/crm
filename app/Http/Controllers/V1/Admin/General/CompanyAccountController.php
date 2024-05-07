<?php


namespace Crater\Http\Controllers\V1\Admin\General;

use Crater\Http\Controllers\Controller;
use Crater\Models\CompanyAccount;
use Crater\Models\Currency;
use Illuminate\Http\Request;

class CompanyAccountController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
       // $this->authorize('viewAny', CompanyAccount::class);

        $limit = $request->has('limit') ? $request->limit : 10;
        $currencies =  Currency::all();

        $companyAccounts = CompanyAccount::whereCompany()->get();

        $mergedData = [];

        // Merge currencies with corresponding CompanyAccounts
        foreach ($companyAccounts as $account) {
            $currencyId = $account->currency_id;
            $currency = $currencies->where('id', $currencyId)->first();

            if ($currency) {
                $mergedData[] = array_merge($account->toArray(), $currency->toArray());
            } else {
                // If currency doesn't exist, just add the CompanyAccount without currency
                $mergedData[] = $account->toArray();
            }
        }

        // Add remaining currencies without CompanyAccounts
        foreach ($currencies as $currency) {
            $currencyId = $currency->id;
            if (!$companyAccounts->contains('currency_id', $currencyId)) {
                $currency->currency_id = $currencyId;
                $mergedData[] =  $currency;
            }
        }
        return response()->json($mergedData);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(Request $request)
    {
       // $this->authorize('create', CompanyAccount::class);

        $CompanyAccount = CompanyAccount::saveAccount($request);
        return response()->json($CompanyAccount);
    }


}
