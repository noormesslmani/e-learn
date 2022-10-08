<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
class Announcement extends Model
{
    use HasFactory;
    function teacher(){
        return $this->belongsTo(User::class,'teacher_id');
    }
}
