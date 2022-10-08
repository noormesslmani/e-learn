<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Type extends Model
{

    protected $connection = 'mongodb';
    protected $collection = 'types';
    function user(){
        return $this->hasMany(User::class,'user_type_id');
    }
}
