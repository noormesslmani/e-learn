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
use App\Models\Submission;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Validator;

class StudentController extends Controller
{
    public function viewAllCourses(){
        return response()->json(["result" => "ok", "data"=>Course::all()], 201); 
    }
    public function getEnrolledCourses(){
        $student_id=Auth::user()->id;
        $enrollments=Enrollment::where('student_id',$student_id)->select('course_id')->get();
        $courses=[];
        foreach($enrollments as $enrollment){
            $courses[]=$enrollment['course_id'];
        }
        return response()->json(["result" => "ok","courses" => $courses], 201);  
    }
    public function enroll(Request $request){
        $course_id=$request->course_id;
        Enrollment::insert([
            'student_id' =>Auth::user()->id,
            'course_id' => $course_id,
            'created_at' => date('d-m-y h:i:s'),
        ]);
        return response()->json(["result" => "ok"], 201); 
    }
    public function getStudentAssignments(Request $request){
        $course_id=$request->course_id;
        if (Enrollment::where('course_id',$course_id)->where('student_id',Auth::user()->id)->exists()){
            $data=Assignment::where('course_id',$course_id)->get();
            return response()->json(['data'=>$data ,"result" => "ok"], 201);
        } 
        return response()->json(["result" => "Access denied"]);
    }

    public function submitAssignment(Request $request){ 
        $validator = Validator::make($request->all(), [
            "assignment_id"=>"required",
            "solution"=>"required",
        ]);
        if ($validator->fails()) {
            return response()->json([
                "message" => "Validation failed"
            ]);
        }
        $assignment_id=$request->assignment_id;
        $student_id=Auth::user()->id;
        if(Submission::where('student_id',$student_id)->where('assignment_id',$assignment_id)->exists()){
            return response()->json(["result" => "Already Submitted"]);
        }
        Submission::insert([
            'assignment_id' =>$assignment_id,
            'student_id' => $student_id,
            'solution' => $request->solution,
            'created_at'=>date('d-m-y h:i:s')
        ]);  
        return response()->json(["result" => "ok"], 201);
    }

}
