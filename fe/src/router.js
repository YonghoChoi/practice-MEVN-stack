/*
  router.js는 어떤 주소에 어떤 컴포넌트를 렌더링할 지를 정의하는 파일
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import restaurantList from './views/restaurant-list.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home // Home 컴포넌트를 명시했으므로 Home.vue를 렌더링
    },
    {
      path: '/list',
      name: 'restaurantList',
      component: restaurantList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // import하지 않고 해당 URL로 접근 시 로딩
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
