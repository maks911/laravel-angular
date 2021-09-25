<?php

namespace App\Http\Controllers;

use App\Pages;
use Illuminate\Support\Facades\Cache;

class PagesController extends Controller
{

    public function __construct()
    {
    }
    /**
     * @return mixed
     */
    public function index() {
        return Pages::orderBy('created_at', 'asc')->get();
    }

    /**
     * Display the specified resource.
     * @param $id
     * @return array|mixed
     */
    public function show($id) {
        return $this->getContent($id);
    }

    /**
     * Set cach
     * @param $result
     */
    private function setCache($result, $key)
    {
        Cache::remember($key, 15, function() use ($result) {
            return $result;
        });
    }

    /**
     * get Content from db to show in api with caching
     * @param $id
     * @return array|mixed
     */
    private function getContent($id)
    {
        $key = "result_$id";
        if (!$result = Cache::get($key)) {
            $pages = Pages::findOrFail($id);
            $result = ['title' => $pages['title']];
            foreach ($pages['meta'] as $meta) {
                $result[$meta['metakey']] = $meta['metavalue'];
            }
            $this->setCache($result, $key);
        }

        return $result;
    }
}
