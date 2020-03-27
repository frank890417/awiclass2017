<template lang="pug">
.page-class
  .container.pt-5
    //.row
      .col-12
        h1 教學頻道
  
    .row
      a.col-sm-12.class(href="https://www.youtube.com/channel/UCHX_XMhPrtvOmgGOnA2eTmA",
                       target="_blank",
                       @click="$ga.event('link', 'click', '前往老闆YT')")
        .inner.row
          .col-sm-4
            .img(style="background-image: url('https://monoame.com/static/img/bosscoding.jpg')")
          .col-sm-8.pt-5
            h2
              i.fab.fa-youtube
            h2.mb-3 老闆 來點寇汀吧。 Boss,CODING please. 
            p 寇汀，是一種名為Coding的雞尾酒。<br>深夜酒吧，想做什麼都可以<br>老闆帶著你一起探索Coding的新領域！

</template>


<style lang="sass">
.page-class
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
    line-height: 1.5
  h2
    line-height: 1.4
    font-size: 2.5rem
</style>