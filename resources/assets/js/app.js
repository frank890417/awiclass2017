
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
    }
});
