<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Demoitems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create("demoitems",function($table){
            $table->increments("id");
            $table->string("name");
            $table->integer("price");
            $table->string("code");
            $table->string("description");
            $table->string("color");
            $table->string("count");
            $table->string("img");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists("demoitems");
    }
}
