<template>
    <div class="header-container">
        <div class="header-box header">
            <a href="#" class="email-logo"></a>
            <div class="logo-box">
                <a href="#" class="logo"></a>
            </div>
            <a href="" class="search-logo"></a>
        </div>
        <nav-box></nav-box>
    </div>   
</template>
<script>
    import navBox from './navBox';
    export default {
        name: 'myHeader',
        data () {
            return {

            }
        }
        ,
        components: {
            navBox
        }
    }
</script>
<style lang="less">
    @import '../assets/style/common.css';
    .header-container {
        width: 100vw;
        overflow: auto;
        position: fixed;
        top: 0;
    }
    .header-box {
        background-color: #d43d3d;
        width: 100%;
        height: 0.9rem;
        line-height: 0.7rem;
        padding: 0 0.4rem;
        box-sizing: border-box;
        text-align: center;
        .email-logo {
            float: left;
            margin-top: 0.2rem;
            background: url(../assets/images/email-icon.png) no-repeat;
            width: 0.5rem;
            height: 0.5rem;
            background-size: 100%;
        }
        .logo-box {
            display: inline-block;
            text-align: center;
            height: 0.46rem;
            .logo {
                width: 1.8rem;
                height: 0.46rem;
                display: inline-block;
                background: url(../assets/images/header-logo.png) no-repeat;
                background-size: 100%;
            }
            &::after {
                content: '';
                display: inline-block;
                width: 0.3rem;
                height: 0.3rem;
                background: url(../assets/images/change-icon.png) no-repeat;
                background-size: 100%;
                margin-left: 0.1rem;
                vertical-align: 0.1rem;
            }
        }
        .search-logo {
            float: right;
            width: 0.48rem;
            height: 0.48rem;
            background: url(../assets/images/search-icon.png) no-repeat;
            background-size: 100%;
            margin-top: 0.2rem;
        }
        
        /* .search-box {
            float: right;
            position: relative;
            width: 3rem;
            height: 0.5rem;
            line-height: 0.5rem;
            margin-top: 0.14rem;
            font-size: 0.24pxrem;
            .el-icon-search {
                position: absolute;
                font-size: 0.24rem;
                top: 0.15rem;
                left: 0.12rem;
                color: #333;
            }
            .search-content {
                float: left;
                text-indent: 0.5rem;              
                width: 3rem;
                height: 0.5rem;
                line-height: 0.5rem;
                border-radius: 0.1rem;
                border: 1px solid #aaa;
            }
        } */
    }
</style>