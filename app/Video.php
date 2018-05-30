<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    //
    protected $fillable = ['title', 'filename', 'duration', 'file_size', 'video_format', 'bit_rate', 'keywords', 'location', 'likes'];
}
