<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pages extends Model
{
    public function meta()
    {
        return $this->hasMany(Metas::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function getCurrentUser($id)
    {
        $user = User::find($id);

        if ($user) {
            return [$user->id => $user->name];
        }

        return 0;
    }
}
