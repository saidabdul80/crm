<?php

namespace Crater\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyAccount extends Model
{
    use HasFactory;
    protected $fillable = [
        'currency_id',
        'company_id',
        'balance',
        'total_collection',
    ];

    public function scopeWhereCompany($query)
    {
        return $query->where('company_accounts.company_id', request()->header('company'));
    }

    public static function saveAccount($request)
    {
        $account = self::where([
            'currency_id'=>$request->currency_id,
            'company_id'=> request()->header('company')
        ])->first();

        $log = [
            'amount'=>$request->amount,
            'action'=>'fund',
            'currency_id'=>$request->currency_id,
            'company_id'=>request()->header('company'),
            'created_by'=>$request->user()->id,
        ];
        if(empty($account)){
            $account=  self::create([
                'currency_id'=>$request->currency_id,
                'company_id'=> request()->header('company'),
                'balance'=>$request->amount,
                'total_collection'=>$request->amount,
            ]);
            CompanyAccountLog::create($log);
        }else{
            $account->balance += $request->amount;
            $account->total_collection += $request->amount;
            $account->save();
            CompanyAccountLog::create($log);
        }

        $account->fresh();
        return $account;
    }
}
