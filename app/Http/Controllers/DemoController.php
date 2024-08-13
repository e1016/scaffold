<?php

namespace App\Http\Controllers;

use App\Models\Trabajador;
use App\Models\User;
use Illuminate\Http\Request;

class DemoController extends Controller
{
    public function index()
    {
        return Trabajador::paginate(5, ['*'], 'page', 1);
    }
}
