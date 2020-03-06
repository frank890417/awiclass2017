
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