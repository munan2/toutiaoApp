<template>
    <div class="common-header-box">
        <a href="javascript:history.back(-1)" class="back-button"></a>
        <span class="common-header-title">{{headerTitle}}</span>
    </div>
</template>
<script>
    export default {
        props: [
            'headerTitle'
        ]
    }
</script>
<style lang="less">
    .common-header-box {
        background-color: #d43d3d;
        width: 100%;
        height: 0.9rem;
        font-size: 0.24rem;
        line-height: 0.9rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        .back-button {
            position: absolute;
            left: 0.2rem;
            top: 50%;
            width: 0.5rem;
            height: 0.5rem;
            background: url(../assets/images/back-icon.png) no-repeat;
            background-size: 100%;
            margin-top: -0.25rem;
        }
        .common-header-title {
            color: #fff;
            font-size: 0.32rem;
        }
    }
</style>