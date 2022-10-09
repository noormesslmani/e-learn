<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\StudentController;
Route::group(["middleware"=> "auth:api"],function(){
    Route::post('/assignment', [TeacherController::class, 'createAssignment']);
    Route::post('/announcement', [TeacherController::class, 'createAnnouncement']);
    Route::get('/getcourses', [TeacherController::class, 'getCourses']);
    Route::post('/studentscount', [TeacherController::class, 'countStudents']);
    Route::post('/getassignments', [TeacherController::class, 'getAssignments']);
    Route::post('/getannouncements', [TeacherController::class, 'getAnnouncements']);
    
    Route::post('/course', [AdminController::class, 'addCourse']);
   
    Route::post('/instructoradd', [PostController::class, 'addInstructor']);
    Route::post('/studentadd', [PostController::class, 'addStudent']);

    Route::get('/getallcourses', [StudentController::class, 'getAllCourses']);
    Route::get('/getenrolledcourses', [StudentController::class, 'getEnrolledCourses']);
    Route::post('/enroll', [StudentController::class, 'enroll']);
    Route::post('/getstudentassignments', [StudentController::class, 'getStudentAssignments']);
});
Route::post('/register', [PostController::class, 'createAccount']);
Route::post('/login', [AuthController::class, 'login']);

