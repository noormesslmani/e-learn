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
    function assignments(){
        return $this->hasMany(Assignment::class,'course_id');
    }

    public function enrollments(){
        return $this->belongsToMany(User::class,'enrollments','course_id','user_id')->as('enrollment');
    }
}
