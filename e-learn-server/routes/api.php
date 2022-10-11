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
        Route::post('/create-assignment', [TeacherController::class, 'createAssignment']);
        Route::post('/announcement', [TeacherController::class, 'createAnnouncement']);
        Route::get('/get-courses', [TeacherController::class, 'getCourses']);
        Route::post('/get-assignments', [TeacherController::class, 'getAssignments']);
        Route::post('/getannouncements', [TeacherController::class, 'getAnnouncements']);
        Route::post('/enroll-student', [TeacherController::class, 'enrollStudent']);

        Route::post('/add-course', [AdminController::class, 'addCourse']);
        
        Route::get('/get-all-courses', [StudentController::class, 'viewAllCourses']);
        Route::get('/get-enrolled-courses', [StudentController::class, 'getEnrolledCourses']);
        Route::post('/enroll', [StudentController::class, 'enroll']);
        Route::post('/get-student-assignments', [StudentController::class, 'getStudentAssignments']);
        Route::post('/submit-assignment', [StudentController::class, 'submitAssignment']);
    });
    Route::get('/users', [AdminController::class, 'getUsers']);
    Route::post('/register', [RegisterController::class, 'createAccount']);
    Route::post('/login', [AuthController::class, 'login']);
});

