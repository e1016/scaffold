<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
  InertiaViewController
};

Route::get('/login', [InertiaViewController::class, 'login'])->name('login');

Route::group(['prefix' => 'dashboard'], function () {
  
  Route::get('/inbox', [InertiaViewController::class, 'inbox'])->name('inbox');

})->name('dashboard');
