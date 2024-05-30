<?php

namespace Crater\Http\Controllers;

use Crater\Models\Company;
use Crater\Models\Currency;
use Crater\Models\Payment;
use Illuminate\Http\Request;

class CentralController extends Controller
{
    public function transactionHook(Request $request){
        $request->validate([
            "client_id"=>"required",
            "from_currency"=>"required",
            "to_currency"=>"required",
            "amount"=>"required",
            "fulfilment_amount"=>"required",
            "rate"=>"required",
            "status"=>"required",
            "description"=>"required",
            "transaction_ref"=>"required",
            "created_at"=>"required",
            "updated_at"=>"required",
        ]);

        $company_id = Company::where('unique_hash',$request->client_id)?->id;
        if(empty($company_id)){

        }
        $paying_currency_id = Currency::where('code', $request->to_currency)?->id;
        $currency_id = Currency::where('code', $request->from_currency)?->id;
        $status = "NOT FULFILLED";
        if($request->statu == "paid"){
            $status = "FULFILLED";
        }
        $transaction =[
                        "payment_number" =>$request->transaction_ref,
                        "payment_date" => $request->created_at,
                        "notes"=>$request->description,
                        "amount" =>$request->amount,
                        "request_amount" => $request->fulfilment_amount,
                        "company_id"=> $company_id,
                        "creator_id" =>0,
                        "exchange_rate"=>$request->rate,
                        "base_amount" => $request->amount,
                        "currency_id"=> $currency_id,
                        "paying_currency_id"=>$paying_currency_id,
                        "fulfilment"=> $status,
        ];

        Payment::create($transaction);
    }
}
