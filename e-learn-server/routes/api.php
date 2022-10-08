<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

// Route::resource('posts', PostController::class)->only([
//     'destroy', 'show', 'store', 'update']);

Route::post("/posts", [PostController::class, "store"]);
Route::post("/updates", [PostController::class, "update"]);
Route::get('/post/{slug}', [PostController::class, 'show']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
