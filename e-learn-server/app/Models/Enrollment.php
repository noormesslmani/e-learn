<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
class Enrollment extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'enrollments';
}
