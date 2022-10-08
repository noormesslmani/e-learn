<?php

namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Laravel\Sanctum\HasApiTokens;
use Jenssegers\Mongodb\Eloquent\Model;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, Notifiable;
    protected $connection = 'mongodb';
    protected $collection = 'users';
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
        return $this->belongsTo(Type::class,'user_type_id');
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

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
