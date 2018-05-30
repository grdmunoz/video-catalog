<?php

use Illuminate\Database\Seeder;
use App\Video;

class VideoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = \Faker\Factory::create();
           
        // Create 10 video file records
        for ($i = 0; $i < 20; $i++) {
            Video::create([
                'filename' => $faker->file($sourceDir = 'config', $targetDir = 'storage'),
                'title' => $faker->text($maxNbChars = 50),
                'duration' => $faker->time($format = 'H:i:s', $max = '00:10:00'),
                'file_size' => $faker->numberBetween($min = 0, $max = 900000),
                'video_format' => 'MP4',
                'bit_rate' => $faker->randomElement($array = array (16,8,5,2)),
                'keywords' => $faker->text($maxNbChars = 20),
                'location' => $faker->text($maxNbChars = 20),
                'likes' => $faker->numberBetween($min = 0, $max = 20)
            ]);
        }
    }
}
