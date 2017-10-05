<template lang="pug">
  div.container
    //- proj_panel(:proj_fb_hash="600361653469553")
    //.jumbotron
      
    .row
      .col-sm-12
        //- h1 動畫互動網頁程式入門 課程FB社團
      nav_proj.col-sm-3.fieldswitch.nav_follow(:class_id="class_id").hidden-xs
      nav_proj.col-sm-12.fieldswitch(:class_id="class_id", style="margin-top: 70px").visible-xs
      //- fbpostpanel.col-sm-9(:posts='fd.feed.data')
      proj_panel.col-sm-9(:proj_fb_hash = "$route.params.proj_fb_hash")
      
      //- profilepanel.col-sm-9(:profiles='profiles.data')


    //- ul.list-group
    //-   li.list-group-item(v-for="item in list") 
    //-     h3 {{item.from.name}}
    //-     h6 {{item.message}}
</template>

<script>
import proj_panel from '../components/proj_panel.vue'
import nav_proj from '../components/nav_proj.vue'
export default {
  props: {
    class_id: Number
  },
  components: {
    proj_panel,nav_proj
  },
  data(){
    return{
    }
  },
  mounted(){
   
    
  }
}
</script>

<style>

</style>
