<template>
    <div class="content-detail">
        <span class="go-top item-tag">置顶</span>
        <span>中国网</span>
        <span><span>评论<span>51</span></span></span>
        <span><span>15分钟</span><span>前</span></span>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>
<style lang="less">
    @import '../assets/style/common.css';
    .content-detail {
        color: #999;
        margin-top: 0.1rem;
        font-size: 0.12rem;
        .item-tag {
            padding: 0 0.04rem;
            border-radius: 0.1rem;
            color: #f85959;
            border: 1px solid rgba(248, 89, 89, 0.5);
        }
    }
</style>