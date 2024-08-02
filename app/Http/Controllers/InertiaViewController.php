<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InertiaViewController extends Controller
{
    public function nominas() { return inertia('Nominas/Nomina'); }
    public function reportes() { return inertia('Reportes/Index'); }
    public function actividad() { return inertia('Actividad/Index'); }
}
