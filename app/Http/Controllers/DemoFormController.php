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
        $inputs["response"]= (array_key_exists('recommand',$inputs) && $inputs['recommand']=="yes")?"感謝你的熱愛":"嗚嗚很難過你不喜翻";
        if (array_key_exists('json',$inputs) && $inputs['json']){
            return $inputs;
        }
        $res = "<h3>後端收到了資料：</h3><ul>";
        $res = $res."<li>名字:".$inputs['name']."</li>";
        $res = $res."<li>商品:".(array_key_exists('option',$inputs)?$inputs['option']:"未選擇")."</li>";
        $res = $res."<li>心得:".$inputs['comment']."</li>";
        $res = $res."<li>推薦:".($inputs['recommand']=="yes"?"是":"否")."</li>";
        $res = $res."<li>系統回覆:".$inputs['response']."</li>";
        $res = $res."<li>原始資料:".json_encode($inputs)."</li>";

        return  $res;
    }
}
