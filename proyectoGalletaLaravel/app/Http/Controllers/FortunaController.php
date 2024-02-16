<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FortunaController extends Controller
{
    public function mensaje()
    {
        return response()->json([
            'mensaje' => $mensajeFortuna
        ]);
    }
}