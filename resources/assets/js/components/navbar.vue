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
      .navbar-brand() 動態互動網頁程式入門
    #app-navbar-collapse.collapse.navbar-collapse
      // Left Side Of Navbar
      // Right Side Of Navbar
      ul.nav.navbar-nav.navbar-right
        li
          router-link(to='/proj/1') 作品-程式入門
        li
          router-link(to='/proj/2') 作品-特效入門
        li
          a(href="https://hahow.in/cr/monoame-webdesign1" ,target="_blank")  前往課程頁面
        li
          a(href="https://www.facebook.com/groups/600360513469667/",target="_blank")  前往FB社團
        li
          a(href="https://hahow.in/cr/monoame-webdesign1",target="_blank")  新增作品方式
        

</template>

<script>
export default {
}
</script>