<template>
    <div class="news-container">
        <card-box v-for="(item, index) in newsList" :newsList="item" :key="index"></card-box>
    </div>
</template>
<script>
    import cardBox from '../components/cardBox'
    import {mapActions, mapState} from 'vuex'
    import mock from '../mock'
    export default {
        data () {
            return {
            }
        },
        components: {
            cardBox
        },
        methods: {
            ...mapActions([
                'getNewsList'
            ])
        },
        computed: {
            ...mapState({
                newsList (state) {
                    return state.newsList
                },
                showMoreFlag (state) {
                    return state.showMoreFlag
                }
            })
        }
    }
</script>
<style lang="less">
    @import '../assets/style/common.css';
    .news-container {
        margin-top: 1.7rem;
        padding: 0 0.30rem;
    }
</style>