<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    protected $fillable = ["year","make","model","mileage",];
    public function user(){
        return $this->belongsTO(User::class);

    }

}
