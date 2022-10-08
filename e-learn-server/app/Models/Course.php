<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
class Course extends Model
{
    use HasFactory;
    function teacher(){
        return $this->belongsTo(User::class,'teacher_id');
    }
    function assignments(){
        return $this->hasMany(Assignment::class,'course_id');
    }

    public function enrollments(){
        return $this->belongsToMany(User::class,'enrollments','course_id','user_id')->as('enrollment');
    }
}
