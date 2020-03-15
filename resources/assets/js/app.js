
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import router from './router'
import store from './store'
import App from './components/App.vue'

import VueAnalytics from 'vue-analytics'
import axios from 'axios';

if (document.domain!="awiclass2017.dev"){
  Vue.use(VueAnalytics, {
    id: 'UA-52977512-11',
    router
  })
}


var hahowAssignments = [
    {
      "value": "5a3934b650fae8001e217604",
      "label": "第 4 章，作業 1 題目：<Project 1> html / css 大整合 - 製作獨特名片網頁",
      "hash": "600361653469553"
    },
    {
      "value": "56189df9df7b3d0b005c663a",
      "label": "第 4 章，作業 2 題目：<Homework 1> 功課說明 - 製作自己的技能網頁",
      "hash": "class1hw1"
    },
    {
      "value": "5a73308c7e07f1001e465d97",
      "label": "第 5 章，作業 1 題目：<Project 2> 實作網頁品牌視覺指導套色",
      "hash": "602543423251376"
    },
    {
      "value": "5a7331067e07f1001e465d9a",
      "label": "第 7 章，作業 1 題目：<Project 3> 動態互動天氣盒子",
      "hash": "614003255438726"
    },
    {
      "value": "5a73319d7e07f1001e465dad",
      "label": "第 8 章，作業 1 題目：<Project 4> 實作購物車-動態新增購買物品與結算",
      "hash": "634100173429034"
    },
    {
      "value": "5a73314a7e07f1001e465d9f",
      "label": "第 9 章，作業 1 題目：<Project 5> 實際應用範例 bootstrap - 結合skrollr製作捲動式網頁",
      "hash": "676015375904180"
    },
    {
      "value": "5a7331827e07f1001e465da6",
      "label": "第 10 章，作業 1 題目：<Project 6> 實際網站應用案例-Yellow Studio 設計工作室網頁",
      "hash": "790055881166795"
    },
    {
      "value": "5a7331697e07f1001e465da3",
      "label": "第 11 章，作業 1 題目：<Project 7> 互動錄音播放鋼琴",
      "hash": "790055361166847"
    },
    {
      "value": "5a2ac03fa6501f001e2ea245",
      "label": "Project.1 使用html/css撰寫一份自己的網頁履歷",
      "hash": "775644402607943",
    },
    {
      "value": "5a2ac216a6501f001e2ea24e",
      "label": "Project.2 在網頁寫一座美麗城市",
      "hash": "777826799056370",
    },
    {
      "value": "5a2ac213a6501f001e2ea24c",
      "label": "Project.3 做一個摩斯密碼翻譯器",
      "hash": "813963862109330",
    },
    {
      "value": "5a8dc4b447536b001e634c1a",
      "label": "Project.4 Memory Blocks 記憶方塊",
      "hash": "class2hw4",
    },
    {
      "value": "5aab7aab1e4ee6001e960c79",
      "label": "Project.5 製作橫衝直撞的貪吃蛇",
      "hash": "class2hw5",
    }
  ]




const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    created(){

        axios.get("/data/同學作品集.json").then(res=>{
            let portfolioData = res.data


            portfolioData = portfolioData.concat([
              {
                name: "HW1 製作自己的技能網頁",
                hash: 'class1hw1',
                class_id: "1",
                posts: []
              },
              {
                name: "Project.4 Memory Blocks 記憶方塊",
                hash: 'class2hw4',
                class_id: "2",
                posts: []
              },
              {
                name: "Project.5 製作橫衝直撞的貪吃蛇",
                hash: 'class2hw5',
                class_id: "2",
                posts: []
              }
            ])


            portfolioData.forEach( (portfolio)=> {
                portfolio.posts = portfolio.posts.map(p=>({
                    ...p,
                    from: {
                        name: p.name,
                        id: p.fbid
                    },
                    created_time: (new Date( parseInt(p.ts*1000))).toLocaleDateString(),
                    message: p.commentText + " " + p.codepenUrl,
                }))
                
            })
            // console.log(portfolioData)
            store.commit("setProjsInfo",portfolioData)

            function loadHahowJSON(file){
              // https://api.hahow.in/api/courses/56189df9df7b3d0b005c6639/creations
              axios.get(file).then(res2=>{
                res2.data.forEach(work=>{
                    let portfolioMap = hahowAssignments.find(item=>item.value==work.assignment)
                    let targetPortfolio = portfolioData.find(p=>p.hash==( (portfolioMap || {}) .hash ))
                    console.log(portfolioMap,portfolioMap.label)
                    if (targetPortfolio && work.description.indexOf("codepen")!=-1){
                        let post = [work].map(w=>({
                            from: {
                                name: w.owner.name,
                                id: w.owner._id,
                                type: "hahow"
                            },
                            created_time: (new Date(w.publishTime)).toLocaleDateString(),
                            message: w.title+"\n"+w.description,
                        }))[0]
                        // console.log(post)
    
                        targetPortfolio.posts.push(post)
                    }
                })
                portfolioData.forEach(portfolio=>{
                    portfolio.posts.sort((p1,p2)=>{
                        return p1.created_time>p2.created_time? 1:-1
                    })
                })
                console.log(portfolioData)
                store.commit("setProjsInfo",portfolioData)
            })
            }
            
            loadHahowJSON("/data/程式課程作業.json")
            loadHahowJSON("/data/特效課程作業.json")

        })
        
        // store.dispatch("initWebsite")
        // store.commit("setProjsInfo",portfolioData)
    }
});


setTimeout(()=>{

    // var firebase = require('firebase');
    //初始化firebase
    var config = {
        apiKey: "AIzaSyDMm8AoI0gjcmCK53u32KNAvchIUBbbLG0",
        authDomain: "monoame-awicourse.firebaseapp.com",
        databaseURL: "https://monoame-awicourse.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "300246568938"
    };

    firebase.initializeApp(config);

    let db = firebase.database();

    db.ref('messages').limitToLast(10).on('value',function(snapshot) {
        console.log(snapshot.val());
        store.commit("setMessages",snapshot.val())
    });

    
    //傳送聊天訊息
    window.send=function send(name,mes){
        var nref=db.ref('messages').push();
            nref.set({
            name: name,
            message: mes,
            time: new Date().toLocaleString()
        })
    }
},1000)