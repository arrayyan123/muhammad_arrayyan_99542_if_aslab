<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function home(){
        return Inertia::render('Posts/Home');
    }
    public function blog(){
        return Inertia::render('Posts/Blog');
    }
    public function product(){
        return Inertia::render('Posts/Product');
    }
    public function contact(){
        return Inertia::render('Posts/Contact');
    }
    public function about(){
        return Inertia::render('Posts/AboutUs');
    }
}
