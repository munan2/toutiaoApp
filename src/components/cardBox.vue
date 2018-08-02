<template>
    <div v-if="newsList" class="card-box" :data-flag="newsList.flag" :data-type="newsList.type">
            <div v-if="newsList.img.length === 1 && newsList.flag !==3 " class="card-box-container card-box-container-one">
                <div class="card-header card-img-one">
                    <h2 v-html="newsList.title"></h2>
                    <card-intro :newsList="newsList"></card-intro>
                </div>
                <card-img :cardImg="newsList.img"></card-img>
            </div>
            <div v-else class="card-box-container card-box-container-more">
                <div class="card-header">
                    <h2 v-html="newsList.title"></h2>
                </div>
                <card-img :data-flag="newsList.id" :cardImg="newsList.img" :imgClass="newsList.img.length"></card-img>
                <card-intro :newsList="newsList"></card-intro>
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
        data () {
            return {

            }
        },
        props: [
            'newsList'
        ]
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
                    highlight {
                        color: #fe3333;
                        font-weight: 800;
                    }
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