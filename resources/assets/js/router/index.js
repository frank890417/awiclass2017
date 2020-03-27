import $ from 'jquery'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
Vue.use(VueRouter)
Vue.use(Meta)

// import page_service from '../components/page_service';
// // import page_works from '../components/page_work';
// // import page_works_indep from '../components/page_work_indep';

// import page_artist from '../components/page_artist';
// import page_artist_indep from '../components/page_artist_indep';

// import page_works from '../components/page_works';
// import page_works_indep from '../components/page_works_indep';

// import page_blog from '../components/page_blog';
// import page_post_indep from '../components/page_post_indep';

// import page_contact from '../components/page_contact';
// .col-sm-9(:proj_fb_hash='600361653469553')
// projpanel.col-sm-9(:proj_fb_hash='602543423251376')
// projpanel.col-sm-9(:proj_fb_hash='614003255438726')
// projpanel.col-sm-9(:proj_fb_hash='634100173429034')
import proj_panel from '../components/proj_panel.vue'
import page_index from '../pages/page_index.vue'
import page_class from '../pages/page_class.vue'
import page_tutorial from '../pages/page_tutorial.vue'

const routes = [
  { path: '/', redirect: '/proj/1' },
  { 
    path: '/proj/:class_id', 
    component: page_index ,
    props: true,
    // alias: '/',
    children: [
      {
        path: ':proj_fb_hash', 
        component: proj_panel,
        props: true
      }
    ]
  },{ 
    path: '/class', 
    component: page_class ,
  } ,{ 
    path: '/tutorial', 
    component: page_tutorial ,
  } 
  // { path: '/expo', component: require( '../pages/page_expo.vue') },
  // { path: '/ticket', component: require( '../pages/page_ticket.vue') },
  // { path: '/about', component: require( '../pages/page_about.vue') },
  // { path: '/blog', component: require( '../pages/page_blog.vue')},
  // { path: '/blog/:filter_cata', component: require( '../pages/page_blog.vue') ,props: true},
  // { path: '/post/n/:title', component: require( '../pages/page_post.vue') ,props: true},
  // { path: '/service', component: page_service },

  // { path: '/works', component: page_works },
  // { path: '/works/:wkid', component: page_works_indep ,props: true},

  // { path: '/artist', component: page_artist},
  // { path: '/artist/:wkid', component: page_artist_indep ,props: true},
  // { path: '/blog', component: page_blog },
  // { path: '/blog/:wkid', component: page_post_indep ,props: true},
  // { path: '/contact', component: page_contact }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

import store from '../store'
router.beforeEach((to, from, next) => {
  console.log(to)

  // let nowProjObj = store.state.projs_info.find(o => o.hash == to.params.proj_fb_hash)
  // if (nowProjObj && nowProjObj.posts.length==0){
  //   store.dispatch("loadProject",nowProjObj)
  // }

  setTimeout(()=>{
    $("html,body").animate({scrollTop: 0});
  },100)
  next()
})


export default router;