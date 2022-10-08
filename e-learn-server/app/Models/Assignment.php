<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
class Assignment extends Model
{

    protected $connection = 'mongodb';
    protected $collection = 'assignments';
    function course(){
        return $this->belongsTo(Course::class,'course_id');
    }
}
