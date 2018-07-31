const MOVE_CHANNEL = 'MOVE_CHANNEL'
export default {
    [MOVE_CHANNEL](state, {type, idx}) {
        let noChannelList = state.channelList.noChannelList.list;
        let hasChannelList = state.channelList.hasChannelList.list;
        if (type === 0 && idx !== 0) {
            let arr = hasChannelList[idx];
            noChannelList.push(arr);
            hasChannelList.splice(idx, 1);
            state.channelList.changeChannel = false;
        } else if (hasChannelList.length < 16){
            let arr = noChannelList[idx];
            hasChannelList.push(arr);
            noChannelList.splice(idx, 1);
            state.channelList.changeChannel = false;
        } else {
            state.channelList.changeChannel = true;
        }
    } 
}