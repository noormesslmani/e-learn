<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TeacherController;
Route::group(["middleware"=> "auth:api"],function(){
    Route::post('/assignment', [TeacherController::class, 'createAssignment']);
    Route::post('/announcement', [TeacherController::class, 'createAnnouncement']);
    Route::get('/getcourses', [TeacherController::class, 'getCourses']);
    Route::get('/studentscount/{course}', [TeacherController::class, 'countStudents']);
    Route::post('/getassignments', [TeacherController::class, 'getAssignments']);
    Route::post('/course', [AdminController::class, 'addCourse']);
    Route::post('/instructoradd', [PostController::class, 'addInstructor']);
    Route::post('/studentadd', [PostController::class, 'addStudent']);

});
Route::post('/register', [PostController::class, 'createAccount']);
Route::post('/login', [AuthController::class, 'login']);

