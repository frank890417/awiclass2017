import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    loading: true,
    projs_info: [
      {
        name: "Proj.1 名片",
        hash: '600361653469553',
        class_id: "1"
      },
      {
        name: "Proj.2 Guideline",
        hash: '602543423251376',
        class_id: "1"
      },
      {
        name: "Proj.3 天氣盒子",
        hash: '614003255438726',
        class_id: "1"
      },
      {
        name: "Proj.4 購物清單",
        hash: '634100173429034',
        class_id: "1"
      },
      {
        name: "Proj.5 bootstrap製作捲動式網頁",
        hash: '676015375904180',
        class_id: "1"
      },
      {
        name: "Proj.6 Yellow Studio 設計工作室",
        hash: '1745106708841278',
        class_id: "1",
      },
      {
        name: "Proj.7 Vue動態鋼琴",
        hash: '1745104002174882',
        class_id: "1"
      },
      {
        name: "Proj.1 使用html/css撰寫一份自己的網頁履歷",
        hash: '775644402607943',
        class_id: "2"
      },
      {
        name: "Proj.2 在網頁寫一座美麗城市",
        hash: '777826799056370',
        class_id: "2"
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
  }
});

export default store