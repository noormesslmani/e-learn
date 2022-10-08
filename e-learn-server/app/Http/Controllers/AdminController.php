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
        try{
            $type_id=User::where('username',$request->username)->select('user_type_id')->get()[0]['user_type_id'];
        }
        catch(\Exception $e){
            return response()->json(["result" => $e->getMessage()], 404); 
        }
        if ($type_id==Type::select('id')->where("type",'teacher')->get()[0]['_id']){
            $id=User::select('id')->where('username',$request->username)->get()[0]['_id'];
            Course::insert([
                'name' =>$request->name,
                'description' => $request->description,
                'fees' => $request->fees,
                'teacher_id'=> $id
            ]); 
            return response()->json(["result" => "ok"], 201); 
        }
        return response()->json(["result" => "Not Acceptable"], 406);
    }

}
