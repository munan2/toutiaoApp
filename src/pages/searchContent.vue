<template>
    <div>
        <com-header :headerTitle="headerTitle"></com-header>
        <div class="search-box">
            <div class="adv-box">
                <div class="small-img-box">
                    <span class="adv-toutiao"></span>
                    <!-- <span class="adv-shenma"></span> -->
                    <!-- <span class="adv-baidu"></span> -->
                </div>
            </div>
            <input type="text" placeholder="请输入搜索关键词" v-model="searchTip" @keyup.enter="submit">
        </div>
        <div class="hot-box">
            <ul v-if="hotFlag === true">
                <li v-for="(item, index) in hotList" :key="index">
                    <a :href="item.url">{{item.name}}</a>
                </li>
            </ul>
            <div class="search-result" v-else>
                <card-box v-for="(item, index) in seaNewsList" :newsList="item" :key="index"></card-box>
            </div>
        </div>
    </div>
</template>
<script>
    import comHeader from '../components/comHeader'
    import cardBox from '../components/cardBox'
    import {mapState, mapActions} from 'vuex'
    export default {
        data () {
            return {
                headerTitle: '搜索',
                searchTip: ''
            }
        },
        components: {
            comHeader,
            cardBox
        },
        computed: {
            ...mapState ({
                hotList (state) {
                    return state.hotList
                },
                hotFlag (state) {
                    return state.hotFlag
                },
                seaNewsList (state) {
                    return state.seaNewsList
                }
            })
        },
        methods: {
            ...mapActions([
                'getHotList',
                'searchNewsList',
                'changeHotFlag'
            ]),
            submit () {
                if (this.searchTip !=='') {
                    this.searchNewsList(this.searchTip)
                    this.changeHotFlag()
                    console.log(1 + this.hotFlag)
                } else if (this.hotFlag === false && this.searchTip === ''){
                    this.changeHotFlag()
                    console.log(2 + this.hotFlag)
                }
            }
        },
        created () {
            this.getHotList()
        }
    }
</script>
<style lang="less">
    .search-box {
        padding: 0.1rem;
        font-size: 0.2rem;
        background: #c9c9c9;
        position: relative;
        input {
            font-size: 0.32rem;
            width: 100%;
            box-sizing: border-box;
            border-radius: 2px;
            border: none;
            padding: 0.1rem 0 0.1rem 0.7rem;
        }
        .adv-box {
            position: absolute;
            left: 0;
            top: 0;
            width: 0.5rem;
            height: 0.5rem;
            padding: 0.13rem 0.2rem;
            .adv-toutiao {
                float: left;
                background: url(../assets/images/search_icons.png) 0 -0.9rem;
                width: 0.46rem;
                height: 0.46rem;
                background-size: 100%;
            }
            .adv-shenma {
                float: left;
                background: url(../assets/images/search_icons.png) 0 -1.87rem;
                width: 0.48rem;
                height: 0.48rem;
                background-size: 100%;
            }
            .adv-baidu {
                float: left;
                background: url(../assets/images/search_icons.png) 0 0;
                width: 0.46rem;
                height: 0.46rem;
                background-size: 100%;
            }
        }
    }
    .hot-box {
        font-size: 0.32rem;
        color: #363636;
        ul {
            text-align: center;
            margin-top: 0.4rem;
            li {
                display: inline-block;
                margin: 0 0.2rem 0.2rem 0;
                padding: 0.1rem;
                background: #f5f5f5;
                a {
                    color: #363636;
                }
            }
        }
    }
    .search-result {
        padding: 0 0.3rem;
    }
</style>