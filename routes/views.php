<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
  InertiaViewController
};

Route::group(['prefix' => 'dashboard'], function () {
  
  Route::get('/nominas', [InertiaViewController::class, 'nominas'])->name('nominas');
  Route::get('/reportes', [InertiaViewController::class, 'reportes'])->name('reportes');
  Route::get('/actividad', [InertiaViewController::class, 'actividad'])->name('actividad');

})->name('dashboard');
