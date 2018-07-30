<template>
    <div class="nav-container">
        <div class="ul-box">
            <ul class="nav-ul">
                <li  v-for="(item,index) in nav" tag="li" :class="{selected: index === curIndex}" @click="changeTab(index)">
                    <router-link :to= "{path: item.url + '/' + item.type }">{{item.text}}</router-link>
                </li>
            </ul>
        </div>
        <span class="add-tag">+</span>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                nav: [
                    {
                        url: '/home', 
                        type: 'all', 
                        text: '推荐'
                    },
                    {
                        url: '/home', 
                        type: 'video', 
                        text: '视频'
                    },
                    {
                        url: '/home', 
                        type: 'hot', 
                        text: '热点'
                    },
                    {
                        url: '/home', 
                        type: 'social', 
                        text: '社会'
                    },
                    {
                        url: '/home', 
                        type: 'entertainment', 
                        text: '娱乐'
                    },
                    {
                        url: '/home', 
                        type: 'military', 
                        text: '军事'
                    },
                    {
                        url: '/home', 
                        type: 'tech', 
                        text: '科技'
                    },
                    {
                        url: '/home', 
                        type: 'car', 
                        text: '汽车'
                    },
                    {
                        url: '/home', 
                        type: 'sports', 
                        text: '体育'
                    },
                    {
                        url: '/home', 
                        type: 'finance', 
                        text: '财经'
                    },
                    {
                        url: '/home', 
                        type: 'word', 
                        text: '国际'
                    },
                    {
                        url: '/home', 
                        type: 'fashion', 
                        text: '时尚'
                    }
                ],
                curIndex: 0
            }
        },
        methods: {
            changeTab: function (index) {
                this.curIndex = index
            }
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
                width: 15.2rem;
                line-height: 0.8rem;
                display: -webkit-box;
                height: 0.8rem;
                li {
                    font-size: 0.32rem;
                    text-align: center;
                    padding: 0 0.28rem;
                    a {
                        color: #505050;
                    }
                }
                .selected {
                    a {
                        color: #f85959;
                    }
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