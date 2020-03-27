<template lang="pug">
nav.navbar.navbar-default.navbar-fixed-top
  .container
    .navbar-header
      // Collapsed Hamburger
      button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#app-navbar-collapse')
        span.sr-only Toggle Navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      // Branding Image
      router-link.navbar-brand(to="/class") Hahow 動畫互動網頁程式 / 特效入門
    #app-navbar-collapse.collapse.navbar-collapse
      // Left Side Of Navbar
      // Right Side Of Navbar
      ul.nav.navbar-nav.navbar-right
        li
          router-link(to='/proj/1') 程式入門作品
        li
          router-link(to='/proj/2') 特效入門作品
        li
          router-link(to='/class') 課程介紹
        li
          router-link(to='/tutorial') 教學頻道
        //- li
        //-   a(href="https://hahow.in/cr/monoame-webdesign1",
        //-    @click="$ga.event('link', 'click', '前往課程-程式')" ,target="_blank") 程式課程
        //- li
        //-   a(href="https://hahow.in/cr/monoame-webdesign2",
        //-    @click="$ga.event('link', 'click', '前往課程-特效')" ,target="_blank") 特效課程
        li
          a(href="https://www.facebook.com/groups/600360513469667/",
           @click="$ga.event('link', 'click', '前往fb社團')", target="_blank")  FB社團
        li
          a(href="http://monoame.com",
           @click="$ga.event('link', 'click', '墨雨設計')", target="_blank")  墨雨設計
        //li
          a(href="https://hahow.in/cr/monoame-webdesign1",target="_blank")  新增作品方式
        

</template>

<script>
import $ from 'jquery'
export default {
  mounted(){
    if ($('.dropdown').length>0){
      console.log("add event collapse")
      // if ($(window).width()>700){
      //   $('.dropdown').hover(function(){
      //     $(this).addClass('open');
      //   },function(){
      //     $(this).removeClass('open');
      //   });
      // }
      $(".dropdown").click(function(){
        $(this).toggleClass("open");
      });
      $(".dropdown-menu li").click(function(){
        // $(this).parent.toggleClass("open");
        $("#app-navbar-collapse").removeClass("in");
      });

      $(".dropdown_cata .dropdown-menu").click(function(){
        console.log("remove")
        setTimeout(()=>{
          $(".dropdown-menu").removeClass("open");
        },200)
      })
    }
  },
  methods: {
    toggleNav(){
      $(".navbar-collapse").collapse('hide');
    }
  }
}
</script>