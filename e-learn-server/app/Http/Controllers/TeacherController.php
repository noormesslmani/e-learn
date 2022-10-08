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
            "deadline"=>"required|date_format:d-m-Y H:i:s",
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
            'desciption' =>$request->description,
            'deadline' => $request->deadline,
            'created_at' => date('d-m-y h:i:s'),
            'course_id'=> $course_id
        ]);
        return response()->json(["result" => "ok"], 201); 
    }
    public function createAnnouncement(Request $request){
        try{
            $course_id=Course::select('id')->where('name',$request->name)->get()[0]['_id'];
        }
        catch(\Exception $e){
            return response()->json(["result" => $e->getMessage()], 404); 
        }
        Announcement::insert([
            'teacher_id' => Auth::user()['_id'],
            'course_id' => $course_id,
            'details' => $request->details,
            'created_at'=> date('d-m-y h:i:s')
        ]);
        return response()->json(["result" => "ok"], 201); 
    }
    public function getCourses(){
        try{
            $data=Course::where('teacher_id', Auth::user()['_id'])->get();}
        catch(\Exception $e){
            return response()->json(["result" => $e->getMessage()], 404); 
        }    
        return response()->json(["result" => "ok", "data"=>$data], 201); 
    }
    
}
