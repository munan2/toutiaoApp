import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const state = {
    changeChannel: false,
    nav: [],
    channelList: {},
    newsList: [],
    modalFlag: false,
    hotList: [],
    hotFlag: true,
    seaNewsList: []
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
