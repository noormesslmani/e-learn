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

    
    public function enroll(Request $request){
        try{
            $course_id=Course::select('id')->where('name',$request->name)->get()[0]['_id'];
        }
        catch(\Exception $e){
            return response()->json(["result" => $e->getMessage()], 404); 
        }
        Enrollment::insert([
            'student_id' =>Auth::user()->id,
            'course_id' => $course_id,
            'created_at' => date('d-m-y h:i:s'),
        ]);
        return response()->json(["result" => "ok"], 201); 
    }
}
