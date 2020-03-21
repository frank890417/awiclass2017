<template lang="pug">
.projpost(:key="post.from.name")
  a(:href='penurl', target='_blank', title='點擊前往作品codepen')
    img(:src='imgurl')
    .content_area
      .pull-right(style="opacity: 0.3;", v-if=" post.likeCount ")
        span {{ post.likeCount }} 
        span ♥
      h5(v-html="person")
      p(v-html='show_more_comment?(para.body+para.extra):para.body')
      span.showmore(v-if="para.extra",
          @click.stop.prevent="show_more_comment=!show_more_comment " ) ... {{ !show_more_comment?"檢視更多":"隱藏更多" }}
        //- span(v-show="para.extra!=''") ...閱讀更多
      //- pre {{codepenInfo}}
      h6
        a.time(:href='comment_url', target='_blank') {{time}}
        .pull-right.time(v-if="post.from.type=='hahow'") (Hahow)
        .pull-right.time(v-else)  (FB)
    //- pre {{post}}

</template>

<script>
export default {
props: ["post","filter","count_id","d_size"],
  data(){ 
    return {
      expand: false,
      para_show: false,
      show_more_comment: false
    };
  },
  computed: {
    comment_url(){
      return "https://www.facebook.com/"+this.post.id;
    },
    person(){
      if (this.post.from.type=="hahow"){
        return "<a class='author' href=\"https://hahow.in/@"+this.post.from.id+"\" target='_blank'> "+this.post.from.name+"</a>";
      }
      return "<a class='author' href=\"https://www.facebook.com/"+this.post.from.id+"\" target='_blank'> "+this.post.from.name+"</a>";
    },
    time(){
      return this.post.created_time.replace("T"," ").replace("+0000","")
    },
    codepenInfo(){
      return this.getCodepenInfo(this.post.message || "");
    },
    para(){
      let url_regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      let result = this.post.message.replace("/details/","/pen/")
                  .replace(/(?:\r\n|\r|\n)/g, "<br>")
                  .replace(url_regex,"")
                  .replace(/<\/p>\n?<p>/g, '<br>')
                  .replace(/<p><\/p>/g, '')
                  .replace(/<br>\n?<br>/g,"<br>")
                  .replace(/<br>/g,"***")
                  .replace(/<[^>]*>/g, '')
                  .replace(/\*\*\*/g,"<br>")
      return {body: result.slice(0,100), extra: result.slice(100)}
    },
    imgurl(){
      return `http://codepen.io/${this.codepenInfo.user}/pen/${this.codepenInfo.pen}/image/${this.d_size}.png`;
    },
    penurl(){
      return `http://codepen.io/${this.codepenInfo.user}/pen/${this.codepenInfo.pen}`;
    }
  }
}
</script>

<style>
/* img{
  width: 100%;
} */

</style>

