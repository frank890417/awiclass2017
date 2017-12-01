import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    loading: true,
    projs_info: [
      {
        name: "Project.1 名片",
        hash: '600361653469553',
        class_id: "1",
        posts: []
      },
      {
        name: "Project.2 Guideline",
        hash: '602543423251376',
        class_id: "1",
        posts: []
      },
      {
        name: "Project.3 天氣盒子",
        hash: '614003255438726',
        class_id: "1",
        posts: []
      },
      {
        name: "Project.4 購物清單",
        hash: '634100173429034',
        class_id: "1",
        posts: []
      },
      {
        name: "Project.5 bootstrap製作捲動式網頁",
        hash: '676015375904180',
        class_id: "1",
        posts: []
      },
      {
        name: "Project.6 Yellow Studio 設計工作室",
        hash: '1745106708841278',
        class_id: "1",
        posts: []
      },
      {
        name: "Project.7 Vue動態鋼琴",
        hash: '1745104002174882',
        class_id: "1",
        posts: []
      },
      {
        name: "Project.1 使用html/css撰寫一份自己的網頁履歷",
        hash: '775644402607943',
        class_id: "2",
        posts: []
      },
      {
        name: "Project.2 在網頁寫一座美麗城市",
        hash: '777826799056370',
        class_id: "2",
        posts: []
      },
      {
        name: "Project.3 做一個摩斯密碼翻譯器",
        hash: '813963862109330',
        class_id: "2",
        posts: []
      }
    ],
    messages: {}
  },
  mutations: {
    setLoading(state,value){
      state.loading=value
    },
    setMessages(state,value){
      state.messages = value
    }
  },
  actions: {
    loadProject(context,proj) {
      if (!proj.loading){
        proj.loaded=true

        let para = `${proj.hash}?fields=comments&locale=zh_TW`
        let url = `http://awiclass.monoame.com/api/get_graphapi.php`
        
        var fetch = (url, stage, datas) => {
          console.log(url)
          axios.get(url, { params: datas }).then((res) => {
            console.log(res.data)
            let result = stage == 0 ? res.data.comments : res.data

            proj.posts = proj.posts.concat(result.data)
            if (result.paging.next) {
              fetch(result.paging.next, stage + 1, {})
            }
          })
        }
        fetch(url, 0, { para: para })
      }
        
    },
    initWebsite(context) {
      // context.state.projs_info.forEach((proj)=>{
      //   let para = `${proj.hash}/comments?summary=true`
      //   let url = `http://awiclass.monoame.com/api/get_graphapi.php`
      //   axios.get(url, { params: { para: para } }).then((res) => {
      //     proj.summaryCount = res.data.summary.total_count
      //   })
      // })
    }
  }
});

export default store