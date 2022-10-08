<?php

namespace App\Http\Controllers;

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
class PostController extends Controller
{
    function createAccount(Request $request){
    
        $validator = Validator::make($request->all(), [
            "full_name"=>"required",
            "phone"=>"required",
            'type' =>'required|in:admin,teacher,student',
            'username' =>'required',
            "email" => "required|email",
            "password" => "required|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/"
        ]);
        if ($validator->fails()) {
            return response()->json([
                "message" => "Validation failed"
            ]);
        }
        $full_name=$request->full_name;
        $phone=$request->phone;
        $email=$request->email;
        $username=$request->username;
        $type=$request->type;
        $password= Hash::make($request->password);
        $user_type_id=Type::select('id')->where('type',$type)->get()[0]["_id"];
       
        if(User::where('email',$email)->exists() ){
            return response()->json([
                "data" => "email already exists"
            ]);
        }
        //check if username is taken
        if(User::where('username',$username)->exists() ){
            return response()->json([
                "data" => "username is taken"
            ]);
        }
        //insert data in users
        User::insert([
            'name' =>$full_name,
            'email' => $email,
            'password' => $password,
            'username'=>$username,
            'phone'=>$phone,
            'user_type_id'=>$user_type_id,
            'profile-picture'=>null,
            'created_at'=>date('d-m-y h:i:s')
        ]);  
        return response()->json(["result" => "ok"], 201);  
    }

    public function addInstructor(Request $request){
        return $this->createAccount($request);
    }

    public function addStudent(Request $request){
        return $this->createAccount($request);
    }
}
