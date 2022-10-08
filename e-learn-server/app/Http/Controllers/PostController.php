<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
//    public function show($title)
//    {
//         $posts= Post::where('title', '=', $title)->get();
//         return response()->json(["data" => $posts], 201);
//     }

    public function show($slug)
    {
        return view('post', [
            'post' => Post::where('slug', '=', $slug)->first()
        ]);
    }

    public function update(Request $request)
    {
        $post = Post::find($request->id);
        $post->title = $request->title;
        $post->body = $request->body;
        $post->slug = $request->slug;
        $post->save();
 
        return response()->json(["result" => "ok"], 201);       
    }

   public function store(Request $request)
   {
       $post = new Post;

       $post->title = $request->title;
       $post->body = $request->body;
       $post->slug = $request->slug;

       $post->save();

       return response()->json(["result" => "ok"], 201);
   }

}
