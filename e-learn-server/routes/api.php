<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
Route::group(["middleware"=> "auth:api"],function(){
    Route::post('/assignment', [TeacherController::class, 'createAssignment']);
    Route::post('/announcement', [TeacherController::class, 'createAnnouncement']);
    Route::post('/course', [AdminController::class, 'addCourse']);
});
Route::post('/register', [PostController::class, 'createAccount']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
