<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Metas extends Model
{
    protected $fillable = ['metakey', 'metavalue', 'metatype'];
}
