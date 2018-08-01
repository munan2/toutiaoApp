<template>
    <div class="imgs-box" :data-num="imgClass">
        <img v-for="(item,index) in cardImg" :src="item.url" alt="" v-if="index < 3" :class="{advImg: imgClass === 1}">
    </div>
</template>
<script>
    export default {
        props:[
            'cardImg',
            'imgClass'
        ],
        data () {
            return {

            }
        }
    }
</script>
<style lang="less">
    @import '../assets/style/common.css';
    .imgs-box {
        font-size: 0.2rem;
        padding: 0.05rem 0;
        overflow: auto;
        img {
            float: left;
            width: 2.27rem;
            padding: 0.02rem;
            box-sizing: border-box;
        }
        .advImg {
            width: 100%;
        }
    }
</style>