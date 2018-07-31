export default {
    moveTags ({commit, state}, {type, idx}) {
        commit('MOVE_CHANNEL', {type, idx});
    }
}