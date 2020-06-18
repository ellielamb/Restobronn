<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('restaurant', function () {

    $results = app('db')->select("SELECT * FROM restaurant");

    return ['data' => $results];
});

$router->get('restaurant/{id}', function ($id) {

    $result = collect(app('db')->select("SELECT * FROM restaurant WHERE id = :id LIMIT 1", ['id' => $id ]))->first();

    $comments = app('db')->select("SELECT * FROM comment WHERE restaurant_id = :restaurant_id", ['restaurant_id' => $id ]);

    $result->comments = $comments;

    $openingHours = app('db')->select("SELECT * FROM opening_hours WHERE restaurant_id = :restaurant_id ORDER BY position ASC", ['restaurant_id' => $id ]);

    $result->opening_hours = $openingHours;

    return ['data' => $result];
});
