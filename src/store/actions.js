import axios from 'axios'
export default {
    moveTags ({commit, state}, {type, idx}) {
        commit('MOVE_CHANNEL', {type, idx});
    },
    getNavList ({commit, state}) {
        axios.get('/api/getNavList').then(res => {
           if (res.data.state === 1) {
               state.channelList = res.data.data.channelList;
               state.nav = res.data.data.channelList.hasChannelList.list;
           }
        })
    },
    changeNav ({commit, state}) {
        axios.post('/api/deleteNavList', {
            hasChannelList: state.channelList.hasChannelList.list,
            noChannelList: state.channelList.noChannelList.list
        }).then(res => {
        })
    },
    getNewsList ({commit, state}, id) {
        axios.post('/api/getNewsList',{
            id: id
        }).then(res => {
            if (res.data.state === 1) {
                state.newsList = res.data.data.newsList;
            }
        })
    },
    getHotList ({commit, state}) {
        axios.get('/api/getHotList').then(res => {
            if (res.data.state === 1) {
                state.hotList = res.data.data.hotList;
            }
        })
    },
    searchNewsList ({commit, state}, key) {
        axios.post('/api/searchNewsList', {
            key: key
        }).then(res => {
            if (res.data.state === 1) {
                state.seaNewsList = res.data.data.newsList;
            }
        })
    },
    changeHotFlag ({commit, state}) {
        state.hotFlag = !state.hotFlag;
    }
}