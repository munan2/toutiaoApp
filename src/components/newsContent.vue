<template>
    <div class="news-container">
        <card-box v-for="(item, index) in newsList" :newsList="newsList[index]" :key="index"></card-box>
    </div>
</template>
<script>
    import cardBox from '../components/cardBox'
    export default {
        data () {
            return {
                newsList: [
                    {
                        id: 0,
                        title: '习近平中东非洲外交之旅掀起强劲“中国风”',
                        flag: 1,
                        origin: '新华网',
                        commentNum: 58,
                        time: 2,
                        imgs: [],
                        type: 0
                    },
                    {
                        id: 1,
                        title: '韩朝今将讨论互撤哨所解除武装 打造真正和平地带',
                        flag: 2,
                        origin: '新华网',
                        commentNum: 58,
                        time: 2,
                        imgs: [
                            {
                                imgId: 0,
                                url: 'https://p3.pstatp.com/list/pgc-image/1532939078342240e816e08'
                            }
                        ],
                        type: 0
                    },
                    {
                        id: 2,
                        title: '美伊剧情大反转！特朗普再“变脸”称愿“无条件”会见伊朗领导人',
                        flag: 0,
                        origin: '新华网',
                        commentNum: 58,
                        time: 0,
                        imgs: [
                            {
                                imgId: 0,
                                url: 'https://p3.pstatp.com/list/pgc-image/1532939078342240e816e08'
                            },
                            {
                                imgId: 1,
                                url: 'https://p3.pstatp.com/list/pgc-image/1532939078342240e816e08'
                            },
                            {
                                imgId: 2,
                                url: 'https://p3.pstatp.com/list/pgc-image/1532939078342240e816e08'
                            },
                            {
                                imgId: 3,
                                url: 'https://p3.pstatp.com/list/pgc-image/1532939078342240e816e08'
                            }
                        ],
                        type: 0
                    },
                    {
                        id: 1,
                        title: '皇后镇令人惊艳的酒店，你会选哪家',
                        flag: 3,
                        origin: '新华网',
                        commentNum: 58,
                        time: 2,
                        imgs: [
                            {
                                imgId: 0,
                                url: 'http://sf3-ttcdn-tos.pstatp.com/img/web.business.image/201805315d0d66cf34fe705d4cf2a71a~640x0.image'
                            }
                        ],
                        type: 1
                    },
                ]
            }
        },
        components: {
            cardBox
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