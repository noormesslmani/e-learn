<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\StudentController;

Route::group(['prefix' => 'v1'], function () {
    Route::group(["middleware"=> "auth:api"],function(){
        Route::post('/assignment', [TeacherController::class, 'createAssignment']);
        Route::post('/announcement', [TeacherController::class, 'createAnnouncement']);
        Route::get('/getcourses', [TeacherController::class, 'getCourses']);
        Route::post('/studentscount', [TeacherController::class, 'countStudents']);
        Route::post('/getassignments', [TeacherController::class, 'getAssignments']);
        Route::post('/getannouncements', [TeacherController::class, 'getAnnouncements']);
        
        Route::post('/course', [AdminController::class, 'addCourse']);
        

        Route::post('/instructoradd', [RegisterController::class, 'addInstructor']);
        Route::post('/studentadd', [RegisterController::class, 'addStudent']);

        Route::get('/viewallcourses', [StudentController::class, 'viewAllCourses']);
        Route::get('/getenrolledcourses', [StudentController::class, 'getEnrolledCourses']);
        Route::post('/enroll', [StudentController::class, 'enroll']);
        Route::post('/getstudentassignments', [StudentController::class, 'getStudentAssignments']);
        Route::post('/submitassignment', [StudentController::class, 'submitAssignment']);
    });
    Route::get('/users', [AdminController::class, 'getUsers']);
    Route::post('/register', [RegisterController::class, 'createAccount']);
    Route::post('/login', [AuthController::class, 'login']);
});

