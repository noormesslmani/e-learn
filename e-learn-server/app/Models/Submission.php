<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Submission extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'submissions';
}