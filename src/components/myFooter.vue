<template>
    <div class="footer-nav-container">
        <router-link tag="li" to="/home" :class="{activeClass: curIndex == 0}" @click.native="changeFooterTab(0)">
            <i class="el-icon-menu"></i>
            <span>首页</span>
        </router-link>
        <router-link tag="li" to="/collect" @click.native="changeFooterTab(1)" :class="{activeClass: curIndex == 1}">
            <i class="el-icon-star-on"></i>
            <span>收藏</span>
        </router-link>
        <router-link tag="li" to="/duanzi" @click.native="changeFooterTab(2)" :class="{activeClass: curIndex == 2}">
            <i class="el-icon-edit-outline"></i>
            <span>收藏</span>
        </router-link>
        <router-link tag="li" to="/about" @click.native="changeFooterTab(3)" :class="{activeClass: curIndex == 3}">
            <i class="el-icon-setting"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                curIndex: 0
            }
        },
        methods: {
            changeFooterTab (index) {
                this.curIndex = index;
            }
        }
    }
</script>
<style lang="less">
    /* .footer-nav-container {
        position: fixed;
        bottom: 0;
        display: flex;
        width: 100%;
        border-top: 1px solid #ddd;
        li {
            display: inline-block;
            flex: 1;
            font-size: px2rem(24px);
            padding: px2rem(16px) 0;
            text-align: center;
            i {
                display: block;
                font-size: px2rem(30px);
            }
            span {
                display: block;
            }

        }
        .activeClass {
            color: #f00;
        }
    } */
</style>