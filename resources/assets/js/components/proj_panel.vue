<template lang="pug">
div.panel_proj
  .row
    .col-sm-12
      //- pre {{ nowProjObj }}
      h1 {{ title }}
        .pull-right
          a.btn.btn-secondary(v-bind:href="'https://www.facebook.com/'+now_hash", target='_blank') 我要交作業(留言)
      hr
      .row
        .col-sm-3
          h4
            span(v-show='posts.length') {{filter==''?('共有'+posts.length+'項作品'):('共有'+filtered_post.length+'項作品搜尋結果')}}
            span(v-show='!posts.length') 載入資料中...
        .col-sm-3
          input.form-control(placeholder='輸入過濾名字/內文', v-model='filter')
          datalist#filter_input
            option(v-for= "op in allnames", :value="op")
        .col-sm-3.btn-group.pull-right.hidden-xs
          button.btn.btn-default(@click="d_size='small'", :class="{'btn-primary':d_size=='small' }")
            | 小呈現
          button.btn.btn-default(@click="d_size='large'", :class="{'btn-primary':d_size=='large' }")
            | 大呈現
        .col-sm-3.btn-group.pull-right
          button.btn.btn-default(@click="rank=1", :class="{'btn-primary':rank==1 }")
            | 新 &gt; 舊
          button.btn.btn-default(@click="rank=0", :class="{'btn-primary':rank==0 }")
            | 舊 &gt; 新
      br
  .row(v-for="cut_post_group in cut_post")
    div(v-show="filter==''" ,
        :class="{'col-sm-4': d_size=='small','col-sm-6':d_size!='small'}"
        v-for='p in cut_post_group')
      postbox(:d_size='d_size', 
              :post='p', :key="p.id")
  .row(v-show="filter!=''")
    .col-sm-4(v-for='p in filtered_post')
      postbox(:post='p', :key="p.id",:d_size="d_size")
  .row
    .toggle_bar

</template>

<script>
import postbox from "./postbox"
import _ from 'lodash'
import $ from 'jquery'
import {mapState} from 'vuex'
import store from '../store'

export default {
  components: {
    postbox
  },
  props: {
    proj_fb_hash: {}
  },
  data: function(){
    return {
      title: "",
      filter: "",
      display_num: 9,
      d_size: "small",
      // posts: [],
      rank: 1
     
    }
  },
  computed:{
    ...mapState(['projs_info']),
    posts(){
      return this.nowProjObj.posts? this.nowProjObj.posts:[]
    },
    now_hash(){
      return this.proj_fb_hash?this.proj_fb_hash:this.projs_info.find(o=>o.class_id==this.$route.params.class_id).hash
    },
    cut_post(){
      let use_posts = 
        this.posts.slice()
      if (this.rank){
        use_posts=use_posts.reverse()
      }
      let result =
          use_posts.slice(0,this.display_num)
          .filter(post=>(this.filter=="" || post.message.indexOf(this.filter)!=-1 || post.from.name.indexOf(this.filter)!=-1) )
          .filter(post=>post.message.indexOf('codepen')>=0 )
      if (this.d_size=="small"){
        return _.chunk(result,3)
      }else{
        return _.chunk(result,2)
      }
    },
    filtered_post(){
      let use_posts = 
        this.posts.filter(post=>post.message.indexOf(this.filter)!=-1 || post.from.name.indexOf(this.filter)!=-1)
                  .slice(0,this.display_num)
      return use_posts;
    },
    filterOptions(){
      if (this.filter==""){
        return []
      }
      let result= this.posts.map(o=>o.from.name).filter(n=>n.indexOf(this.filter!=-1))
      return result.slice(0,10)
    },
    allnames(){
      let result= this.posts.map(o=>o.from.name)
      return result
    },
    nowProjObj(){
      return this.projs_info.find(o=>o.hash==this.now_hash)
    }
  },
  mounted(){
    this.title = this.nowProjObj.name

    var vobj=this;
    //- if (!this.nowProjObj.loaded){
    //-   store.dispatch("loadProject",this.nowProjObj)
    //- }

    // let para= `${this.now_hash}?fields=comments.order(reverse_chronological)&locale=zh_TW`
    // let para= `${this.now_hash}?fields=comments&locale=zh_TW`
    // let url = `http://awiclass.monoame.com/api/get_graphapi.php`

    // var fetch = (url,stage,datas)=>{
    //   console.log(url)
    //   axios.get(url,{params: datas}).then((res)=>{
    //     console.log(res.data)
    //     let result = stage==0?res.data.comments:res.data
       
    //     this.posts=this.posts.concat(result.data)
    //     if (result.paging.next){
    //       fetch(result.paging.next,stage+1,{})
    //     }
    //   })
    // }
    // fetch(url,0,{para: para})

    let _this = this
    $(window).scroll(function(){

      if ($(".toggle_bar").length>0){
        var nowy=$(window).scrollTop()+$(window).outerHeight()+$(window).outerHeight()/2;
        var target=$(".toggle_bar").offset().top;
        console.log(nowy,target);
        
        if (nowy>target){
          vobj.display_num+=_this.d_size=="small"?6:4;
        }
      }
    });
  }
}
</script>

<style lang="sass">
.btn.btn-secondary
  background-color: #414c56
  color: white
</style>


