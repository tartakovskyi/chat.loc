<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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

Route::group(['namespace' => 'Api'], function () {
	
	Route::group(['namespace' => 'Auth'], function () {
		Route::post('register', 'RegisterController');
		Route::post('login', 'LoginController');
		Route::post('logout', 'LogoutController')->middleware('auth:api');
		Route::middleware('auth:api')->get('current', function (Request $request) {
			return $request->user();
		});
	});

	Route::apiResources([
		'chat' => ChatController::class,
		'chat.message' => MessageController::class,
		'user' => UserController::class,
	]);

	Route::resource('chat.chat_user', ChatUserController::class)->shallow();
});


