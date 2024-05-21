<?php

namespace Crater\Models;
use Scottlaurent\Accounting\Models\TransactionGroup;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Scottlaurent\Accounting\ModelTraits\AccountingJournal;

class Currency extends Model
{
    use HasFactory, AccountingJournal;
    protected $with = ['journal'];

    protected $fillable = [
        'reserve'
    ];

    protected $guarded = [
        'id'
    ];

}
