<?php

use Illuminate\Support\Facades\Route;
// use \app\Http\Controllers\UserController;

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::post('cars', 'App\Http\Controllers\CarController@store')->name("cars.store");
// Route::get('cars', 'App\Http\Controllers\CarController@index');

Route::resource('cars', 'App\Http\Controllers\CarController');
