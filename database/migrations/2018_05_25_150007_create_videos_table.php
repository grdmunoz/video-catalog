<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('videos', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            
            $table->string('filename');
            $table->string('title');
            $table->time('duration')->nullable();
            $table->integer('file_size')->nullable();
            $table->string('video_format')->nullable();
            $table->integer('bit_rate')->nullable();
            $table->string('keywords')->nullable();
            $table->string('location')->nullable();
            $table->integer('likes')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('videos');
    }
}
