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
class TeacherController extends Controller
{
    public function createAssignment(Request $request){
        $validator = Validator::make($request->all(), [
            "description"=>"required",
        ]);
        if ($validator->fails()) {
            return response()->json([
                "message" => "Validation failed"
            ]);
        }
        Assignment::insert([
            'description' =>$request->description,
            'created_at' => date('d-m-y h:i:s'),
            'course_id'=> $request->course_id,
            'teacher_id'=> Auth::user()->id
        ]);
        return response()->json(["result" => "ok"], 201); 
    }

    public function createAnnouncement(Request $request){
        $validator = Validator::make($request->all(), [
            "course_id"=>"required",
            "details"=>"required",
        ]);
        if ($validator->fails()) {
            return response()->json(["message" => "Validation failed"]);
        }
        Announcement::insert([
            'teacher_id' => Auth::user()->id,
            'course_id' => $request->course_id,
            'details' => $request->details,
            'created_at'=> date('d-m-y h:i:s')
        ]);
        return response()->json(["result" => "ok"], 201); 
    }

    public function getCourses(){
        try{
            $data=Course::where('teacher_id', Auth::user()->id)->get();}
        catch(\Exception $e){
            return response()->json(["result" => "no courses"]); 
        }    
        return response()->json(["result" => "ok", "data"=>$data], 201); 
    }

    public function getAssignments(Request $request){
        try{
            $data=Assignment::where('course_id', $request->course_id)->get();}
        catch(\Exception $e){
            return response()->json(["result" => $e->getMessage()]); 
        }  
        return response()->json(["result" => "ok", "data"=>$data], 201); 
    }

    public function getAnnouncements(Request $request){
        try{
            $data=Announcement::where('course_id', $request->course_id)->get();}
        catch(\Exception $e){
            return response()->json(["result" => "no announcements"]); 
        }  
        return response()->json(["result" => "ok", "data"=>$data], 201); 
    }

    public function enrollStudent(Request $request){
        try{
            $user=User::where('username', $request->username)->get()[0];
        }
        catch(\Exception $e){
            return response()->json(["result" => "user does not exist"]); 
        } 
        if($user->type()->get()[0]['type']=='student'){
            Enrollment::insert([
                'student_id' =>$user['_id'],
                'course_id' => $request->course_id,
                'created_at' => date('d-m-y h:i:s'),
            ]);
            return response()->json(["result" => "ok"], 201); 
        }
        else {
            return response()->json(["result" => "invalid user type"]); 
        }
    }
    
}
