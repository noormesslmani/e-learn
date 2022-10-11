<?php

namespace App\Models;
use Jenssegers\Mongodb\Eloquent\Model;
class Course extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'courses';
    function teacher(){
        return $this->belongsTo(User::class,'teacher_id');
    }
}
