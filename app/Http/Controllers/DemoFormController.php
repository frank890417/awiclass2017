<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
// use Input;

class DemoFormController extends Controller
{
    //
    public function getFormData(){
        $inputs =  Input::all();
        return $inputs;
    }
}
