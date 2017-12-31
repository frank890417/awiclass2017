<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use App\Demoitem;

class DemoShopController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(){
        return Demoitem::all("id","name","code","img");
    }
    public function show($id){
        $result = Demoitem::find($id);
        return $result;
    }
    public function update($id){
        $inputs = Input::all();
        $demoitem = Demoitem::find($id);
        $demoitem->update($inputs);
        $result =  $demoitem;

        return $result;
    }
    public function destroy($id){
        $demoitem = Demoitem::find($id);
        $demoitem->delete();
        return ["status"=>"success"];
    }
    public function store(){
        $inputs = Input::all();
        $demoitem = Demoitem::create($inputs);
        
        $demoitem = Demoitem::find($demoitem->id);
        return $demoitem;
    }

}
