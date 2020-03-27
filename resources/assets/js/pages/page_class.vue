<template lang="pug">
.page-class.pt-5
  .container.pt-5
    //.row.mt-5
      .col-12
        h1 課程介紹
  
    .row
      a.col-sm-6.class(href="https://hahow.in/cr/monoame-webdesign1",
                       target="_blank",
                       @click="$ga.event('link', 'click', '前往課程-程式')")
        .inner.row
          .col-sm-12
            .img(style="background-image: url('https://hahow.in/images/574fab4f206cd60900c52a67?width=600')")
          .col-sm-12
            h2.mt-5.mb-3 動畫互動網頁程式入門(HTML/CSS/JS)
            p 想用 illustrator 的思維學習網頁前端程式設計嗎？看完一般網路教學總是離想像有一大段距離嗎？讓這堂課帶你走進前端動態網頁的世界。
      a.col-sm-6.class(href="https://hahow.in/cr/monoame-webdesign2",target="_blank",
                      @click="$ga.event('link', 'click', '前往課程-特效')")
        .inner.row

          .col-sm-12
            .img(style="background-image: url('https://hahow.in/images/5b85f1a8297df5001efb0150?width=600')")
          .col-sm-12
            h2.mt-5.mb-3 動畫互動網頁特效入門（JS/CANVAS）
            p 深入淺出學習網頁動畫、特效與遊戲製作的原理，從零快速入門網頁、JS 與繪圖實戰範例，並學習使用 Vue.js 整合前端網頁。
      //a.col-sm-4.class(href="https://www.facebook.com/pg/bosscodingplease" target="_blank" @click="log_event('老闆，來點寇汀吧。')")
        .row
          .col-sm-12
            .img(style="background-image: url('/static/img/bosscoding.jpg')")
          .col-sm-12
            h2.mt-5 老闆，來點寇汀吧。
            h4.mb-3 Boss,CODING please.
            p 寇汀，是一種名為Coding的雞尾酒。<br>深夜酒吧，想做什麼都可以<br>每週四十點，老闆帶著你直播寇汀Coding！


</template>


<style lang="sass">
.page-class
  padding-top: 50px
  .class
    margin-top: 20px
    margin-bottom: 20px
    padding: 50px
    .inner
      border: solid 1px #eee
      border-radius: 5px
      transition: 0.5s
      padding: 20px
      &:hover
        background-color: #eee

  .img
    height: 250px
    background-size: cover
    background-position: center center
  p
    font-size: 1.5rem
  h2
    line-height: 1.4
    font-size: 2.5rem
</style>