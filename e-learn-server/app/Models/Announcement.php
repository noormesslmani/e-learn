<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
class Announcement extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'announcements';
    function teacher(){
        return $this->belongsTo(User::class,'teacher_id');
    }
}
