import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const state = {
    changeChannel: false, //判断选中频道是否超过16个标志
    nav: [],
    channelList: {},
    newsList: [],
    modalFlag: false, //点击邮箱图标展示弹窗标志
    hotList: [],
    hotFlag: true,
    seaNewsList: [],
    showMoreFlag: false //加载中标志
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
