<?php

use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    $visited = DB::select('select * from places where visited = ?', [1]);
    $togo = DB::select('select * from places where visited = ?', [0]);

  return view('/pages/spa', ['visited' => $visited, 'togo' => $togo ] );
});
Route::resource('pages', PagesController::class);
