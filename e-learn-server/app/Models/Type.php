<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Type extends Model
{
    use HasFactory;
    function user(){
        return $this->hasMany(User::class,'user_type_id');
    }
}
