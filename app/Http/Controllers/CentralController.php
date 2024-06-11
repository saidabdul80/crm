<?php

namespace Crater\Http\Controllers;

use Crater\Models\Company;
use Crater\Models\Currency;
use Crater\Models\Customer;
use Crater\Models\Invoice;
use Crater\Models\InvoiceItem;
use Crater\Models\Item;
use Crater\Models\Payment;
use DB;
use Illuminate\Http\Request;

class CentralController extends Controller
{
    public function transactionHook(Request $request)
    {
        try {

            $request->validate([       
                "from_currency" => "required",
              //  "from_currency" => "required",
                "amount" => "required",
                //"fulfilment_amount" => "required",
                //"rate" => "required",
                "status" => "required",
                "description" => "required",
                "transaction_ref" => "required",
                "created_at" => "required",
                "updated_at" => "required",
            ]);
            
            $company_id = Company::where('uuid', $request->client_id)->first()?->id;
                    
            $from_currency_id = Currency::where('code', $request->from_currency)->first()?->id;
            $currency_id = Currency::where('code', $request->to_currency)->first()?->id;
      /*       $status = "NOT FULFILLED";
            if ($request->statu == "completed") {
                $status = "FULFILLED";
            } */

            

            $transaction = [
                "payment_number" => $request->payment_number,
                "transaction_ref" => $request->transaction_ref,
                "payment_date" => $request->created_at??date('Y-m-d'),
                "notes" => $request->description,
                "amount" => $request->amount,
                "request_amount" => $request->fulfilment_amount,
                "company_id" => $company_id,
                "creator_id" => NULL,
                "exchange_rate" => $request->rate,
                "details"=>$request->customer_details,
                "base_amount" => $request->amount,
                "currency_id" => $currency_id,
                "from_currency_id" => $from_currency_id,
                "fulfilment" => $request->status,
                "type"=>"receive"
            ];

            $payment = Payment::where("payment_number",$request->payment_number)->orWhere("transaction_ref",$request->transaction_ref)->first();
            if(empty($payment)){
                Payment::insert($transaction);
            }else{
                $payment->status = $request->status;
                $payment->save();
            }

        } catch (\Illuminate\Validation\ValidationException $e) {
            return $e->errors();
        } catch (\Exception $e) {
            return $e;
        }
    }


    public function invoiceHook(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'client_id' => 'required|string',
            'customer_id' => 'required|string',
            'company_id' => 'required|string',
            'invoice_date' => 'required|date',
            'due_date' => 'required|date',
            'status' => 'required|string',
            'paid_status' => 'required|string',
            'total' => 'required|integer',
            "from_currency" => "required",
            "from_currency" => "required",
            'discount_val' => 'required|integer',
            'exchange_rate' => 'required|float',
            'items_name' => 'required|string',
            'requested_amount' => 'required|integer',
            'price' => 'required|integer',
            'item_tax' => 'required|integer',
            'item_discount' => 'required|float',
        ]);

        DB::beginTransaction();
        try {
            // Fetch company
            $company = Company::where('id', $validatedData['company_id'])->first();
            if (!$company) {
                return response()->json(['error' => 'Invalid client ID.'], 400);
            }

            $customer = Customer::first(['id' => $validatedData['customer_id']]);
            $from_currency_id = Currency::where('code', $request->from_currency)->first()?->id;
            $currency_id = Currency::where('code', $request->to_currency)->first()?->id;
            // Prepare invoice data
            $invoiceData = [
                'invoice_date' => $validatedData['invoice_date'],
                'due_date' => $validatedData['due_date'],
                'status' => $validatedData['status'],
                'paid_status' => $validatedData['paid_status'],
                'total' => $validatedData['total'],                
                'base_total' => $validatedData['total'],                
                'quantity'    => $validatedData['requested_amount'],            
                'exchange_rate' => $validatedData['exchange_rate'],
                'company_id' => $company->id,
                'customer_id' => $customer?->id,
                "currency_id" => $currency_id,
                "from_currency_id" => $from_currency_id,
            ];
            
            // Create invoice
            $invoice = Invoice::create($invoiceData);
            // Create invoice item
            InvoiceItem::create([
                'name'        => $validatedData['items_name'],
                'description' => $request->item_descripiton??'',
                'company_id'  => $company->id,
                'currency_id' => $currency_id,
                'exchange_rate' => $validatedData['exchange_rate'],
                'quantity'    => $validatedData['requested_amount'],
                'price'       => $validatedData['price'],
                'tax'         => $validatedData['item_tax'],
                'discount'    => $validatedData['item_discount'],
            ]);

            DB::commit();
            return response()->json(['success' => true, 'invoice_id' => $invoice->id], 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            DB::rollBack();
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public static function createCustomer($request)
    {
        $validatedData =  $request->validate([
            'external_id'=>'required',
            'name'=>'required',
            'email'=>'required',
            'first_name'=>'required',
            'last_name'=>'required',
            'gender'=>'required',                       
            'phone'=>'required',
        ]);

        $customer = Customer::create(  $validatedData );
    }



}
