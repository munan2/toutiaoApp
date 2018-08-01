<template>
    <div class="nav-container">
        <div class="ul-box">
            <ul class="nav-ul">
                <li  v-for="(item,index) in nav">
                    <router-link @click.native="changeTab(item.id)" :to= "{path: '/home/' + item.id}" tag="a" :data-id="item.id" :class="{selected: curIndex === item.id}">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <a class="add-tag" href="/ChaManage">+</a>
    </div>
</template>
<script>
    import store from '../store'
    import {mapActions, mapState} from 'vuex'
    export default {
        data () {
            return {
                curIndex: 0
            }
        },
        methods: {
            ...mapActions([
                'getNavList',
                'getNewsList'
            ]),
            changeTab (index) {
                this.curIndex = index
                this.getNewsList(index)
            }
        },
        computed: {
            ...mapState({
                nav (state) {
                    return state.nav;
                }
            })
        },
        created () {
            this.getNavList();
        }
    }
</script>
<style lang="less">
    @import '../assets/style/common.css';
    .nav-container {
        background-color: #f4f5f6;
        height: 0.8rem;
        position: relative;
        .ul-box {
            width: 100vw;
            height: 0.8rem;
            overflow-x: scroll;
            .nav-ul {
                /* width: 15.2rem; */
                line-height: 0.8rem;
                display: -webkit-box;
                height: 0.8rem;
                margin-right: 0.2rem;
                li {
                    font-size: 0.32rem;
                    text-align: center;
                    padding: 0 0.28rem;
                    a {
                        color: #505050;
                    }
                    &:last-child {
                        padding-right: 1rem;
                    }
                }
                .selected {
                    color: #f85959;
                }
            }
        }
        .add-tag {
            position: absolute;
            top: 0;
            right: 0;
            width: 0.8rem;
            height: 0.8rem;
            color: #f85959;
            font-size: 0.6rem;
            line-height: 0.7rem;
            text-align: center;
            background: #f4f5f6;
            box-shadow: 0.1rem 0.1rem 0.2rem #000;
        }
    }

</style>