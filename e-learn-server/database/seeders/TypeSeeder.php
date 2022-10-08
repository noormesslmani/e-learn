<?php

namespace Database\Seeders;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Seeder;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class TypeSeeder extends Seeder
{

    public function run()
    {
        DB::table('types')->insert([
            'type' => 'admin',
        ]);
        DB::table('types')->insert([
            'type' => 'teacher',
        ]);
        DB::table('types')->insert([
            'type' => 'student',
        ]);
    }

}
