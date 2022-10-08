<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
class Assignment extends Model
{
    use HasFactory;
    function course(){
        return $this->belongsTo(Course::class,'course_id');
    }
}
