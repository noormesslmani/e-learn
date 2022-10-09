<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Type;
use App\Models\Assignment;
use App\Models\Announcement;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Validator;

class StudentController extends Controller
{
    public function getAllCourses(){
        return response()->json(["result" => "ok", "data"=>Course::all()], 201); 
    }
}
