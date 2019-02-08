<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ListingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = base_path() . '/database/data.json';
        $file = File::get($path);
        $data = json_decode($file, true);
//        we insert the data using the DB facade
//        eg:: DB::table())->where()->join()
//        we use the insert method of the builder, which accepts an array of column names and values
        DB::table('listings')->insert($data);
    }
}
