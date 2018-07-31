<template>
    <div class="card-box">
            <div v-if="newsList.imgs.length === 1 && newsList.type !==1 " class="card-box-container card-box-container-one">
                <div class="card-header card-img-one">
                    <h2>{{newsList.title}}</h2>
                    <card-intro></card-intro>
                </div>
                <card-img :cardImg="newsList.imgs"></card-img>
            </div>
            <div v-else class="card-box-container card-box-container-more">
                <div class="card-header">
                    <h2>{{newsList.title}}</h2>
                </div>
                <card-img :cardImg="newsList.imgs" :imgClass="newsList.type"></card-img>
                <card-intro></card-intro>
            </div>
    </div>
</template>
<script>
    import cardIntro from './cardIntro'
    import cardImg from './cardImg'
    export default {
        components: {
            cardIntro,
            cardImg
        },
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
    .card-box {
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);
        padding: 0.3rem 0;
        .card-box-container {
            .card-header {
                width: 100%;
                h2 {
                    font-size: 0.34rem;
                    font-weight: normal;
                    color: #222;
                }
            }
            .card-img-one {
                flex: 1;
            }
        }
        .card-box-container-one {
            display: flex;
        }
        &:last-child {
            border-bottom: none;
        }
    }
</style>