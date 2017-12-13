<?php

use Illuminate\Database\Seeder;
use App\DemoItem;
class DemoItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DemoItem::truncate();
        DemoItem::create([
            "name"=>"米鞋",
            "price"=>100,
            "code"=>"ZE10_W",
            "description"=>"這可能不是你見過最白的鞋子",
            "color"=>"米色",
            "count"=>10,
            "img"=>"/img/shoe_452.jpg"
        ]);
        DemoItem::create([
            "name"=>"黑色布鞋",
            "price"=>250,
            "code"=>"TA0_E",
            "description"=>"你可以穿著他踩泥巴",
            "color"=>"黑色",
            "count"=>10,
            "img"=>"/img/shoe_3523tg.jpg"
        ]);
        DemoItem::create([
            "name"=>"灰厚鞋",
            "price"=>200,
            "code"=>"OI66",
            "description"=>"厚底 好穿 灰撲撲",
            "color"=>"灰色",
            "count"=>10,
            "img"=>"/img/shoe_235g.jpg"
        ]);
        DemoItem::create([
            "name"=>"黑白帆布鞋",
            "price"=>530,
            "code"=>"KY24",
            "description"=>"這應該是名牌吧",
            "color"=>"白色",
            "count"=>10,
            "img"=>"/img/shoe_34tv3ws.jpeg"
        ]);
        DemoItem::create([
            "name"=>"皮厚底鞋",
            "price"=>530,
            "code"=>"JE42",
            "description"=>"隱性增高",
            "color"=>"黑色",
            "count"=>10,
            "img"=>"/img/shoe_23vrga.jpeg"
        ]);
        DemoItem::create([
            "name"=>"灰跑鞋",
            "price"=>100,
            "code"=>"ET50_E",
            "description"=>"灰色布鞋哦",
            "color"=>"灰色",
            "count"=>10,
            "img"=>"/img/shoe_2dgegr.jpg"
        ]);

        // $table->string("name");
        // $table->integer("price");
        // $table->string("code");
        // $table->string("description");
        // $table->string("color");
        // $table->string("count");
        // $table->string("img");
    }
}
