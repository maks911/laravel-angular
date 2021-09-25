<?php

namespace App\Http\Controllers;

use App\Pages;
use Illuminate\Support\Facades\Cache;

class PagesController extends Controller
{
    private $cacheDataKey;

    public function __construct()
    {
        $this->cacheDataKey = 'data_new';
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
     * Set cache
     * @param $result
     */
    private function setCache($result, $key)
    {
        Cache::remember($this->cacheDataKey, 15, function() use ($result) {
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
        $key = 'data_new';
        if (!$result = Cache::get($this->cacheDataKey)) {
            $pages = Pages::findOrFail($id);
            $result = ['title' => $pages['title']];
            foreach ($pages['meta'] as $meta) {
                if ($meta['metatype'] !== 'json') {
                    $result[$meta['metakey']] = $meta['metavalue'];
                } else {
                    $result['fields'][] = $meta['metavalue'];
                }
            }
            $this->setCache($result, $key);
        }

        return $result;
    }
}
