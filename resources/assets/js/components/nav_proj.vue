<template lang="pug">

ul.list-group.nav_proj
  li.list-group-item(
    v-for="(proj,pid) in projs_info.filter(o=>o.class_id==class_id)",
    :class="{active: ($route.params.proj_fb_hash==proj.hash) || (!$route.params.proj_fb_hash && pid==0) }")
    router-link(
      :to="'/proj/'+class_id+'/'+proj.hash") {{proj.name}}
  //- li(@click='sw(\"club\")', :class='[page==\"club\"?\"active\":\"\"]') FB討論社團
  //- li(@click='sw(\"profiles\")', :class='[page==\"profiles\"?\"active\":\"\"]') 同學Codepen集合 ({{pjnum[0]}}件)
  //- li(@click='sw(\"proj1\")', :class='[page==\"proj1\"?\"active\":\"\"]') Project.1 名片 ({{pjnum[1]}}件)
  //- li(@click='sw(\"proj2\")', :class='[page==\"proj2\"?\"active\":\"\"]') Project.2 視覺規範 ({{pjnum[2]}}件)
  //- li(@click='sw(\"proj3\")', :class='[page==\"proj3\"?\"active\":\"\"]') Project.3 天氣盒子 ({{pjnum[3]}}件)
  //- li(@click='sw(\"proj4\")', :class='[page==\"proj4\"?\"active\":\"\"]') Project.4 代辦清單 ({{pjnum[4]}}件)
  //- li(@click='sw(\"hahowdatas\")', :class='[page==\"hahowdatas\"?\"active\":\"\"]')  Hahow單元資訊
  //- li(@click='sw(\"to_explain_hand_page\")')  新增作品方式
  //- button.fbshare_btn(@click='sw(\"share_course\")') （๑ • ‿ • ๑ ）分享課程

  chat_panel.hidden-xs
  br


</template>

<script>
import chat_panel from './chat_panel'
import $ from 'jquery'
import {mapState} from 'vuex'

export default {
  components: {
    chat_panel
  },
  props: [
    'class_id'
  ],
  data(){
    return {
    }
  },
  mounted(){
     $(window).scroll(function(){
        var nowy=$(window).scrollTop()+70
        $(".nav_follow").css("margin-top",nowy+"px")
    });

  },
  computed:{
    ...mapState(['projs_info'])
  }
}
</script>

<style>

</style>
