<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts/app_spa');
});
Route::get('/proj', function () {
    return view('layouts/app_spa');
});
Route::get('/class', function () {
    return view('layouts/app_spa');
});
Route::get('/proj/{classid}', function () {
    return view('layouts/app_spa');
});
Route::get('/proj/{classid}/{hash}', function () {
    return view('layouts/app_spa');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
