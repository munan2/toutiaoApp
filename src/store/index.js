import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const state = {
	channelList: {
        changeChannel: false,
        hasChannelList: {
            type: 0,
            list: [
                {
                    id: 0,
                    name: '推荐'
                },
                {
                    id: 1,
                    name: '社会'
                },
                {
                    id: 2,
                    name: '娱乐'
                },
                {
                    id: 3,
                    name: '汽车'
                },
                {
                    id: 4,
                    name: '体育'
                },
                {
                    id: 5,
                    name: '财经'
                },
                {
                    id: 6,
                    name: '军事'
                }
            ]
        },
        noChannelList: {
            type: 1,
            list: [
                {
                    id: 7,
                    name: '美食'
                },
                {
                    id: 8,
                    name: '热点'
                },
                {
                    id: 9,
                    name: '养生'
                },
                {
                    id: 10,
                    name: '旅游'
                },
                {
                    id: 11,
                    name: '历史'
                },
                {
                    id: 12,
                    name: '探索'
                },
                {
                    id: 13,
                    name: '育儿'
                },
                {
                    id: 14,
                    name: '故事'
                },
                {
                    id: 15,
                    name: '美文'
                },
                {
                    id: 16,
                    name: '国际'
                },
                {
                    id: 17,
                    name: '故事'
                },
                {
                    id: 18,
                    name: '时尚'
                },
                {
                    id: 19,
                    name: '科技'
                },
                
            ]
        }
    }
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
