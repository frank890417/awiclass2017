//初始化ga

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52977512-11', 'auto');
ga('send', 'pageview' , '/');

//取得社團與貼文資料
//取得社團資料
$.ajax({
  url: "http://awiclass.monoame.com/api/get_graphapi.php",
  data: {
    para: '600360513469667?fields=id,name,description,link,venue,docs,feed&locale=zh_TW'
  },
  success: function(response){
    // console.log(response);
    fbdata=JSON.parse(response);
    Vue.set(vm,"fd",fbdata);
  }
});


//使用遞迴取得特定貼文中paging下一頁之資料
function add_proj_response(key,obj,nxurl){
  // console.log(nxurl);
  $.ajax({
    url: "http://awiclass.monoame.com/api/get_graphapi.php",
    data: {
      para: nxurl
    },
    success: function(response){
      var respobj=JSON.parse(response);
      // console.log(key+": "+respobj.data.length);
      respobj.data.forEach((res)=>{obj.data.push(res)});
      // .concat();
      // for( var i=0;i<respobj.data.length;i++){
      //   obj.data.push(respobj.data[i]);
      // }
      if (respobj.paging.next){
        var nxurl_temp=respobj.paging.next.split("2.8/")[1];
        Vue.set(vm,key,obj);
        add_proj_response(key,obj,nxurl_temp);
      }
    }
  });
}
//載入特定專案 vm變數名稱/文章編號/儲存資料的陣列實體
function load_proj(key,postid,obj){
  $.ajax({
    url: "http://awiclass.monoame.com/api/get_graphapi.php",
    data: {
      para: postid+'?fields=comments&pretty=0&limit=10&locale=zh_TW'
    },
    success: function(response){
      var respobj=JSON.parse(response);
      obj=respobj.comments;
      Vue.set(vm,key,obj);
      url=respobj.comments.paging.next;
      var nxurl=url.split("2.8/")[1];
      // console.log("nx: "+ nxurl);
      add_proj_response(key,obj,nxurl);
      }
  });
}

//載入特定專案 vm變數名稱/文章編號/儲存資料的陣列實體
function load_profile(key,postid,obj){
  $.ajax({
    url: "http://awiclass.monoame.com/api/get_graphapi.php",
    data: {
      para: postid+'?fields=comments{attachment}&locale=zh_TW'
    },
    success: function(response){
      var respobj=JSON.parse(response);
      obj=respobj.comments;
      Vue.set(vm,key,obj);
      url=respobj.comments.paging.next;
      var nxurl=url.split("2.8/")[1];
      // console.log("nx: "+ nxurl);
      add_proj_response(key,obj,nxurl);
      }
  });
}


load_profile("profiles","600365056802546",profiles);

load_proj("proj1","600361653469553",comments);
load_proj("proj2","602543423251376",comments2);
load_proj("proj3","614003255438726",comments3);
load_proj("proj4","634100173429034",comments4);

 $.ajax({
  url: "http://awiclass.monoame.com/fb/get_hahow_lectures.php",
  success: function(res){
    hahowdatas=JSON.parse(res);
    Vue.set(vm,"hahowdatas",hahowdatas);
  }
 });
//# sourceURL=pen.js

var fbdata={feed:{data:[]}};
var comments={comments:{data:[]}};
var comments2={comments:{data:[]}};
var comments3={comments:{data:[]}};
var comments4={comments:{data:[]}};
var profiles={comments:{data:[]}};

var hahowdatas=[];
//左側切換面板的導覽列
Vue.component("fieldswitch",{
  template: "<div><ul>\
              <li @click='sw(\"club\")' :class='[page==\"club\"?\"active\":\"\"]'>FB討論社團</li>\
              <li @click='sw(\"profiles\")' :class='[page==\"profiles\"?\"active\":\"\"]'>同學Codepen集合 ({{pjnum[0]}}件)</li>\
              <li @click='sw(\"proj1\")' :class='[page==\"proj1\"?\"active\":\"\"]'>Project.1 名片 ({{pjnum[1]}}件)</li>\
              <li @click='sw(\"proj2\")' :class='[page==\"proj2\"?\"active\":\"\"]'>Project.2 視覺規範 ({{pjnum[2]}}件)</li>\
              <li @click='sw(\"proj3\")' :class='[page==\"proj3\"?\"active\":\"\"]'>Project.3 天氣盒子 ({{pjnum[3]}}件)</li>\
              <li @click='sw(\"proj4\")' :class='[page==\"proj4\"?\"active\":\"\"]'>Project.4 代辦清單 ({{pjnum[4]}}件)</li>\
             
              <li @click='sw(\"hahowdatas\")' :class='[page==\"hahowdatas\"?\"active\":\"\"]'> Hahow單元資訊</li>\
              <li @click='sw(\"to_hahow_course_page\")' > 前往課程頁面</li>\
              <li @click='sw(\"to_fb_club_page\")' > 前往FB社團(學生專用)</li>\
              <li @click='sw(\"to_explain_hand_page\")' > 新增作品方式</li>\
              <br>\
              <button class='fbshare_btn' @click='sw(\"share_course\")' >（๑ • ‿ • ๑ ）分享課程</button>\
              <br>\
              <br><chatpanel :messages='messages'/><br>\
            </ul></div>",
  methods:{
    sw: function(p){
      ga('send', 'pageview', "/"+p);
      console.log("ga log: "+"/"+p);
      if(p=="to_hahow_course_page"){
        window.open('https://hahow.in/cr/monoame-webdesign1');
        return 0;
      }else if(p=="to_fb_club_page"){
        window.open('https://www.facebook.com/groups/600360513469667/');
        return 0;
      }else if(p=="to_explain_hand_page"){
        window.open('https://www.facebook.com/groups/600360513469667/permalink/632282303610821/');
        return 0;
      }else if(p=="share_course"){
        FB.ui({
          method: 'share',
          href: 'https://hahow.in/cr/monoame-webdesign1'
        }, function(response){
          if (response && !response.error_message) {
            console.log("ga log: "+"/course_shared");
            ga('send', 'pageview', "/course_shared");
          } else {
            console.log("ga log: "+"/course_cancal_share");
            ga('send', 'pageview', "/course_cancal_share");
          }
        });
        return 0;
      }
      vm.page=p;
    }
  },
  props: ["page","messages","pjnum"]
})



//fb貼文總覽的群組組件(下層是fbpost)
Vue.component("hahowlecture",{
  template: "<div >
                <div>{{hdata.title}}</div>\
            </div>",
  props: ["hdata"]
});

//fb貼文總覽的群組組件(下層是fbpost)
Vue.component("hahowpanel",{
  template: "<div class='col-sm-9'>
                <div class='col-sm-12'><h3>Hahow單元資訊</h3><hr></div>\
                <hahowlecture class='col-sm-12' v-for='h in hahowdatas' :hdata='h'>
                </hahowlecture>
            </div>",
  props: ["hahowdatas"]
});

//每一個fbpost的組件(上層是fbpostpanel)
Vue.component("fbpost",{
  template: "<div class=fbpost  >\
                <p v-html='para'></p>\
                <h6>{{post.updated_time}}</h6>\
             </div>",
  props: ["post"],
  computed: {
    para: function(){
      return this.post.message.replace(/(?:\r\n|\r|\n)/g, "<br>");
    }
  }
})
//fb貼文總覽的群組組件(下層是fbpost)
Vue.component("fbpostpanel",{
  template: "<div class='col-sm-9'>
                <div class='col-sm-12'><h3>FB社團po文節錄(調整中)</h3><hr></div>\
                <fbpost class='col-sm-12' v-for='p in posts' :post='p'>
                </fbpost>
            </div>",
  props: ["posts"]
});
//每一個專案的組件(上層是projpanel)
Vue.component("proj_post",{
  template: "<div v-show='filter_show'>\
                <div class=\"projpost\">\
                  <a :href='penurl' target='_blank' title='點擊前往作品codepen'><img :src='imgurl'></a>\
                  <div class=content_area>\
                    <p v-html='para'></p>\
                    <h6><a class='time' :href='comment_url' target='_blank'>{{post.created_time}}</a></h6>\
                  </div>\
                </div>\
             </div>",
  props: ["post","filter","d_size"],
  data: function(){ 
    return {expand: false};
  },
  computed: {
    comment_url: function(){
      return "https://www.facebook.com/"+this.post.id;
    }
    ,para: function(){
      return "<a href=\"https://www.facebook.com/"+this.post.from.id+"\" target='_blank'> ["+this.post.from.name+"]</a>: "+this.post.message.replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
    ap: function(){
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
    imgurl: function(){
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
    penurl: function(){
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
    filter_show: function(){
      if (!this.post.message){
        return false;
      }
      var result=(this.post.message.indexOf(this.filter)!=-1 || this.post.from.name.indexOf(this.filter)!=-1);
      return result;
    }
  }
});


Vue.component("profile_post",{
  template: "<div class='col-sm-6'>\
                <div class=\"projpost row\"  style='min-height: 210px'>\
                  <div class='col-sm-3'>\
                    <a :href='profile.attachment.url' target='_blank' title='點擊前往codepen'><img :src='profile.attachment.media.image.src'></a>\
                    <div class=content_area>\
                      <p>{{profile.attachment.title.replace(' on CodePen','')}}</p>\
                    </div>\
                  </div>\
                  <div class='col-sm-9' style='padding: 0px 0px 0px 0px'>\
                    <ul><li v-for='ppost in popularposts' class=col-xs-4 style='padding: 5px'><a :href='ppost.link' target='_blank'><img :title='ppost.title' style='width: 100%' style='display: inline-block' :src='ppost.images.small'><h5>{{decodeURI(ppost.title).slice(0,7)}}...</h5></a></li></ul>\
                  </div>\
                </div>\
             </div>",
  props: ["profile"],
  data: function(){
    return {
      popularposts: []
    }
  },
  computed:{
    username: function(){
      return this.profile.attachment.url.split("io")[1].split("%2F")[1];
    },
    popularposts_url: function(){
      return "http://cpv2api.com/pens/popular/"+this.username;
    }
  },
  mounted: function(){
    var vobj=this;
    $.ajax({
      url: this.popularposts_url,
      success: function(res){
        Vue.set(vobj,"popularposts",(res).data);
        console.log(vobj.popularposts);
      }
    });

  }
});
//專案總覽的群組組件(下層proj_post)
Vue.component("profilepanel",{
  template: "<div>
              <div class='col-sm-12'>\
                <h2 v-show='!profiles.length'>載入資料中...</h2>\
                <h3>{{filter==''?('共有'+profiles.length+'項資料'):''}}
                 <a href='https://www.facebook.com/groups/600360513469667/permalink/600365056802546/' target='_blank'>(帳號搜集貼文網址)</a>
                 <input class='finder_input' placeholder='輸入過濾名字/內文' v-model='filter'>\
                 &nbsp;&nbsp;&nbsp;&nbsp;\
                </h3>
              </div>\
              <div v-show=\"filter==''\" class='col-sm-12'>\
                <profile_post v-for='p in profiles' :d_size='d_size' :profile='p' :filter='filter' />
              </div>\
              <h2 class='loadfac_profile'>...</h2>\
            </div>",
  props: ["profiles","proj_fb_hash"],
  data:function(){
    return {
      filter: "",
      display_num: 25,
      d_size: "small"
    }
  },mounted: function(){
    if($(".loadfac_profile").offset().top-$(window).scrollTop()<$(window).height()){
      console.log("invlew!");
    }
  }
});


//專案總覽的群組組件(下層proj_post)
Vue.component("projpanel",{
  template: "<div>
              <div class='col-sm-12 posts_list'>\
                <h2 v-show='!posts.length'>載入資料中...</h2>\
                <h3>{{filter==''?('共有'+posts.length+'項作品'):('共有'+filtered_post.length+'項作品搜尋結果')}}
                 <a v-bind:href=\"'https://www.facebook.com/'+proj_fb_hash\" target='_blank'>(繳交貼文網址)</a>
                 <input class='finder_input' placeholder='輸入過濾名字/內文' v-model='filter'>\
                 &nbsp;&nbsp;&nbsp;&nbsp;\
                 <label>小呈現\
                    <input class='input_size' type='radio' value='small' v-model='d_size'></input>\
                 </label>\
                 <label>大呈現\
                    <input class='input_size' type='radio' value='big' v-model='d_size'></input>\
                 </label>\
                </h3>
              </div>\
              <div v-show=\"filter==''\" :class=\"[d_size=='small'?'col-sm-4':'col-sm-6']\">\
                <proj_post v-for='p in cut_post[0]' :d_size='d_size' :post='p' :filter='filter' v-if=\"p.message.indexOf(\'http\')>=0\" />
              </div>\
              <div v-show=\"filter==''\" :class=\"[d_size=='small'?'col-sm-4':'col-sm-6']\">\
                <proj_post v-for='p in cut_post[1]' :d_size='d_size' :post='p' :filter='filter' v-if=\"p.message.indexOf(\'http\')>=0\" />
              </div>\
              <div v-show=\"filter==''\" :class=\"[d_size=='small'?'col-sm-4':'col-sm-6']\">\
                <proj_post v-for='p in cut_post[2]' :d_size='d_size' :post='p' :filter='filter' v-if=\"p.message.indexOf(\'http\')>=0\" />
              </div>\
              <proj_post v-show=\"filter!=''\" class='col-sm-4' v-for='p in filtered_post' :post='p' v-if=\"p.message.indexOf(\'http\')>=0\" />
             
              <div class='toggle_bar'></div>\
            </div>",
  props: ["posts","proj_fb_hash"],
  data: function(){
    return {
      filter: "",
      display_num: 1000,
      d_size: "small"
    }
  },
  computed:{
    cut_post: function(){
      var p1=[],p2=[],p3=[];
      var use_posts = this.posts.slice(0,this.display_num);
      console.log(this.display_num);

      for(var i=0;i<use_posts.length;i++){
        if (this.filter=="" || use_posts[i].message.indexOf(this.filter)!=-1 || use_posts[i].from.name.indexOf(this.filter)!=-1 ){
          switch(i%3){
            case 0: 
              p1.push(use_posts[i]);
              break;
            case 1: 
              p2.push(use_posts[i]);
              break;
            case 2: 
              p3.push(use_posts[i]);
              break;
          }
          
        }
      }
      return [p1,p2,p3];
    },
    filtered_post: function(){
      var p=[];
      var use_posts = this.posts.slice(0,this.display_num);
      for(var i=0;i<use_posts.length;i++){
        if (use_posts[i].message.indexOf(this.filter)!=-1 || use_posts[i].from.name.indexOf(this.filter)!=-1 ){
          p.push(use_posts[i]);
        }
      }
      return p;
    }
  },
  mounted(){
    var vobj=this;
    $(window).scroll(function(){

      if ($(".toggle_bar").length>0){
        var nowy=$(window).scrollTop()+$(window).outerHeight();
        var target=$(".toggle_bar").offset().top;
        console.log(nowy,target);
        
        if (nowy>target){
          vobj.display_num+=6;
        }
      }
    });
  }
});

//傳送聊天訊息
function send(name,mes){
   var nref=database.ref('messages').push();
   nref.set({
      name: name,
      message: mes,
      time: new Date().toLocaleString()
    })
}
//聊天訊息總覽的組件
Vue.component("chatpanel",{
  template: "<div><br><h4>Firebase即時留言板(最新10則)</h4>
              <hr>\
                <div class='chatbox_msg' v-for=\"m in messages"><span class=chatbox_name>{{m.name}}</span>: {{m.message}}\
                  <span class='smalltime'>{{m.time}} </span>\
                  <br>\
                </div>\
                <input class='input_name' v-model='name' placeholder='路人'> <input v-model='temptext' placeholder='留句話吧'> <button @click='send'>送出</button>\
              </div>",
  props: ['messages'],
  data: function (){
    return {
      temptext: "",
      name: ""
    }
  },
  methods: {
    send: function(){
      if (this.temptext !=""){
        if (this.name=="")
          send("路人",this.temptext);
        else
          send(this.name,this.temptext);
        this.temptext="";
      }
    }
  }

});

var messages=[];

//初始化vue
var vm = new Vue({
  el: "#app",
  data: {
    fd: fbdata,
    page: "proj1",
    proj1: comments,
    proj2: comments2,
    proj3: comments3,
    proj4: comments4,
    profiles: profiles,
    messages: messages,
    hahowdatas: hahowdatas
  },
  computed: {
    pjnumarray: function(){
      var lenobjs=[this.profiles,this.proj1,this.proj2,this.proj3,this.proj4];
      var lenresult=[];
      for(var i=0;i<lenobjs.length;i++){
         if (lenobjs[i]) {
            lenresult.push(lenobjs[i].data.length);
         }else{
            lenresult.push(0);
         }
      }
      return lenresult;
    }
  },
  template: "<div class='container-fluid'>
  <div class='jumbotron'>
    <h2>[AWI] 動畫互動網頁程式入門 課程FB社團</h2>
  </div>
  <div class=row><fieldswitch class='col-sm-3 fieldswitch' :page='page' :pjnum='pjnumarray' :messages='messages' />\
  <fbpostpanel class='col-sm-9' v-if='page==\"club\"' :posts='fd.feed.data'/>\
  <projpanel class='col-sm-9' v-show='page==\"proj1\"' :posts='proj1.data' :proj_fb_hash='600361653469553'/>\
  <projpanel class='col-sm-9' v-show='page==\"proj2\"' :posts='proj2.data' :proj_fb_hash='602543423251376'/>\
  <projpanel class='col-sm-9' v-show='page==\"proj3\"' :posts='proj3.data' :proj_fb_hash='614003255438726'/>\
  <projpanel class='col-sm-9' v-show='page==\"proj4\"' :posts='proj4.data' :proj_fb_hash='634100173429034'/>\
  <profilepanel class='col-sm-9' v-show='page==\"profiles\"' :profiles='profiles.data'/>\
  </div></div>",
  mounted: function(){
    $(".pageloading").remove();
  }
});
//<hahowpanel  class='col-sm-9' v-show='page==\"hahowdatas\"' :hahowdatas='hahowdatas'/>\


//初始化firebase
var config = {
  apiKey: "AIzaSyDMm8AoI0gjcmCK53u32KNAvchIUBbbLG0",
  authDomain: "monoame-awicourse.firebaseapp.com",
  databaseURL: "https://monoame-awicourse.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "300246568938"
};
firebase.initializeApp(config);
database = firebase.database();

//將message物件與firevase掛勾
function init(){
  database.ref('messages').limitToLast(10).on('value',function(snapshot) {
     // console.log(snapshot);
     Vue.set(vm,"messages",snapshot.val());
  });
}
init();