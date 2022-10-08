<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    function type(){
        return $this->belongsTo(User_type::class,'user_type_id');
    }
    
    function courses(){
        return $this->hasMany(Course::class,'teacher_id');
    }

    function announcements(){
        return $this->hasMany(Announcement::class,'teacher_id');
    }

    public function enrollments(){
        return $this->belongsToMany(Course::class,'enrollments','student_id','course_id')->as('enrollment');
    }
}
