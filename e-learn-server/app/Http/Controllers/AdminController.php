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
        if ($type=='admin'){
            $id=User::select('id')->where('username',$request->username)->get()[0]['_id'];
            Course::insert([
                'name' =>$request->name,
                'description' => $request->description,
                'fees' => $request->fees,
                'teacher_id'=> $id
            ]); 
            return response()->json(["result" => "ok"], 201); 
        }
        return response()->json(["result" => "Unauthorized"], 406);
    }
}
