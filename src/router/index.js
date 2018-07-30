import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from '../App'
import Home from '../pages/Home'
Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/home/:type',
      component: Home
    }
  ]
})
