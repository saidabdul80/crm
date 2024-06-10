<?php

namespace Crater\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "client_id"=>["required"],
            "from_currency"=>["required"],
            "from_currency"=>["required"],
            "amount"=>["required"],
            "fulfilment_amount"=>["required"],
            "rate"=>["required"],
            "status"=>["required"],
            "description"=>["required"],
            "transaction_ref"=>["required"],
            "created_at"=>["required"],
            "updated_at"=>["required"],
        ];
    }
}
