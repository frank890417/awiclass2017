<template lang="pug">
.projpost
  a(:href='penurl', target='_blank', title='點擊前往作品codepen')
    img(:src='imgurl')
    .content_area
      h5(v-html="person")
      p(v-html='para')
      h6
        a.time(:href='comment_url', target='_blank') {{post.created_time}}

</template>

<script>
export default {
props: ["post","filter","count_id"],
  data(){ 
    return {expand: false};
  },
  computed: {
    comment_url(){
      return "https://www.facebook.com/"+this.post.id;
    },
    person(){
      return "<a class='author' href=\"https://www.facebook.com/"+this.post.from.id+"\" target='_blank'> "+this.post.from.name+"</a>";
    },
    para(){
      return this.post.message.replace(/(?:\r\n|\r|\n)/g, "<br>").replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,"")
    },
    ap(){
        const regex = /[^i\/][^o\/]\/([a-zA-Z0-9\_]{6})/g;
        const regex2= /io\/.*?([a-zA-Z0-9\_]*)/g;
        var str = this.post.message; 
        if (str.match(regex)){
          var res = str.match(regex)[0].substr(3);
          var res2=str.match(regex2)[0].substr(3);
          return [res,res2];
        }
        return null;
    },
    imgurl(){
      const regex = /[^i\/][^o\/]\/([a-zA-Z0-9\_]{6})/g;
      const regex2= /io\/.*?([a-zA-Z0-9\_]*)/g;
      var str = this.post.message; 
      if (str.indexOf('http')!=-1){
        var res = str.match(regex)[0].substr(3);
        var res2=str.match(regex2)[0].substr(3);
        var template="http://codepen.io/username/pen/penname/image/small.png";
        return template.replace("username",res2).replace("penname",res);
      }else{
        return "";
      }
    },
    penurl(){
      const regex = /[^i\/][^o\/]\/([a-zA-Z0-9\_]{6})/g;
      const regex2= /io\/.*?([a-zA-Z0-9\_]*)/g;
      var str = this.post.message; 
      if (str.indexOf('http')!=-1){
        var res = str.match(regex)[0].substr(3);
        var res2=str.match(regex2)[0].substr(3);
        var template="http://codepen.io/username/pen/penname";
        return template.replace("username",res2).replace("penname",res);
      }else{
        return "";
      }
    },
    filter_show(){
      if (!this.post.message){
        return false;
      }
      var result=(this.post.message.indexOf(this.filter)!=-1 || this.post.from.name.indexOf(this.filter)!=-1);
      return result;
    }
  }
}
</script>

<style>
/* img{
  width: 100%;
} */

</style>

