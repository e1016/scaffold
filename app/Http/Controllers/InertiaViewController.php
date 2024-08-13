<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InertiaViewController extends Controller
{
    public function login() { return inertia('Auth/Login'); }
    public function inbox() { return inertia('Inbox/Inbox'); }
}
