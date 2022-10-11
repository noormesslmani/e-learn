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
            "name"=>"required",
            "description"=>"required",
        ]);
        if ($validator->fails()) {
            return response()->json([
                "message" => "Validation failed"
            ]);
        }
        try{
            $course_id=Course::select('id')->where('name',$request->name)->get()[0]['_id'];
        }
        catch(\Exception $e){
            return response()->json(["result" => $e->getMessage()], 404); 
        }
        Assignment::insert([
            'description' =>$request->description,
            'created_at' => date('d-m-y h:i:s'),
            'course_id'=> $course_id,
            'teacher_id'=> Auth::user()->id
        ]);
        return response()->json(["result" => "ok"], 201); 
    }

    public function createAnnouncement(Request $request){
        $validator = Validator::make($request->all(), [
            "name"=>"required",
            "details"=>"required",
        ]);
        if ($validator->fails()) {
            return response()->json([
                "message" => "Validation failed"
            ]);
        }
        try{
            $course_id=Course::select('id')->where('name',$request->name)->get()[0]['_id'];
        }
        catch(\Exception $e){
            return response()->json(["result" => $e->getMessage()], 404); 
        }
        Announcement::insert([
            'teacher_id' => Auth::user()->id,
            'course_id' => $course_id,
            'details' => $request->details,
            'created_at'=> date('d-m-y h:i:s')
        ]);
        return response()->json(["result" => "ok"], 201); 
    }
    public function getCourses(){
        try{
            $data=Course::where('teacher_id', Auth::user()->id)->get();}
        catch(\Exception $e){
            return response()->json(["result" => $e->getMessage()], 404); 
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
            return response()->json(["result" => $e->getMessage()], 404); 
        }  
        return response()->json(["result" => "ok", "data"=>$data], 201); 
    }

    public function countStudents(Request $request){
        try{
            $count = Enrollment::where('course_id',$request->course_id)->count();}
        catch(\Exception $e){
            return response()->json(["result" => $e->getMessage()], 404); 
        }    
        return response()->json(["result" => "ok", "data"=>$count], 201); 
    }
    
}
