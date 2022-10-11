<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Type;
use App\Models\Assignment;
use App\Models\Announcement;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Validator;
class AdminController extends Controller
{
    public function addCourse(Request $request){
        $admin = Auth::user();
        $type= Auth::user()->type()->get()[0]['type'];
        $validator = Validator::make($request->all(), [
            "name"=>"required",
            "username"=>"required",
            'description' =>'required',
            'fees' =>'required|Integer',
        ]);
        if ($validator->fails()) {
            return response()->json([
                "message" => "Validation failed"
            ]);
        }
        if ($type=='admin'){
            if(User::where('username',$request->username)->exists()){
                $user_type=User::where('username',$request->username)->first()->type()->get()[0]['type'];}
            
            else{
                return response()->json(["result" => 'Invalid User']); 
            }
            if($user_type=='teacher'){
                $id=User::where('username',$request->username)->get()[0]['_id'];
                Course::insert([
                    'name' =>$request->name,
                    'description' => $request->description,
                    'fees' => $request->fees,
                    'teacher_id'=> $id
                ]); 
                return response()->json(["result" => "ok"], 201); 
            }
            return response()->json(["result" => "Unauthorized User"]);
        }
        return response()->json(["result" => "Unauthorized"]);
    }
}
