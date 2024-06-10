<?php

namespace Crater\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class PgClient extends Model
{
    use HasFactory;

    protected $connection = 'pgsql';
    protected $table = 'clients'; // Ensure this matches the table name in your pgsql database

    protected $fillable = [
        'company_name', 'email','id', 'commission_percentage', 'api_url','api_key','webhook_url','country','company_logo'
    ];

    protected $keyType = 'string'; // Indicate that the primary key is a string
    public $incrementing = false; // Disable auto-incrementing since we use UUIDs

    
}
