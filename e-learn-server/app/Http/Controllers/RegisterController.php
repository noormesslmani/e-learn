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
class RegisterController extends Controller
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
            return response()->json(["result" => "Validation failed" ]);
        }
        
        //check if username or email are taken
        if(User::where('email',$request->email)->exists() ){
            return response()->json(["result" => "email already exists"]);}

        if(User::where('username',$request->username)->exists() ){
            return response()->json([ "result" => "username is taken"]);}

        //create a new user
        $user_type_id=Type::select('id')->where('type',$request->type)->get()[0]["_id"];
        User::create([
            'full_name' =>$request->full_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'username'=>$request->username,
            'phone'=>$request->phone,
            'user_type_id'=>$user_type_id,
            'profile_picture'=>null,
            'created_at'=>date('d-m-y h:i:s')
        ]);  
        return response()->json(["result" => "ok"], 201);  
    }
}
