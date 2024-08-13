<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
  DemoController,
};

Route::get('/demo/auto-table-data', [DemoController::class, 'index']);
