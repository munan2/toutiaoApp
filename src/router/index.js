import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from '../App'
import Home from '../pages/Home'
import ChaManage from '../pages/channelManagement'
import SearchContent from '../pages/searchContent'
Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/:type',
      component: Home
    },
    {
      path: '/ChaManage',
      name: 'ChaManage',
      component: ChaManage
    },
    {
      path: '/SearchBox',
      name: 'SearchBox',
      component: SearchContent
    }
  ]
})
