<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix'=>'/demo'],function(){
    Route::resource('shop','DemoShopController');
    Route::post("/feedback",'DemoFormController@getFormData'); 
    Route::get("/feedback",function(){
        return "請使用POST方法";
    }); 
});