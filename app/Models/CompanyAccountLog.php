<?php

namespace Crater\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyAccountLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'action',
        'currency_id',
        'company_id',
        'created_by',
    ];
}
