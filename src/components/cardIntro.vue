<template>
    <div class="content-detail">
        <span class="item-tag" v-if="newsList.flag===1">置顶</span>
        <span class="tem-tag" v-if="newsList.flag===2">热</span>
        <span class="adv-tag item-tag" v-if="newsList.flag===3">广告</span>
        <span>{{newsList.origin}}</span>
        <span v-if="newsList.commentNum >= 0"><span>评论<span>{{newsList.commentNum}}</span></span></span>
        <span v-if="newsList.time"><span>{{newsList.time}}</span><span>前</span></span>
    </div>
</template>
<script>
    export default {
        props: [
            'newsList'
        ],
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
        .adv-tag {
            color: #2a90d7;
            border: 1px solid rgba(42, 144, 215, 0.5);
        }
    }
</style>