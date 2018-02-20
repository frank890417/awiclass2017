<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    //
    public function getMemoryGameLevels(){
        return [
            "1234",
            "12324",
            "231234",
            "41233412",
            "41323134132",
            "2342341231231232",
            "41243132221234442213423",
            "331231232324441242413232124123"
        ];
    }
}
