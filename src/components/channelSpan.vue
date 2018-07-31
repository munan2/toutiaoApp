<template>
    <div class="channel-span-box">
        <span class="channel-span" @click="changeTag(type, index)">
            {{channelName}}
        </span>  
    </div>
    
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        data () {
            return {

            }
        },
        props: [
            'channelName',
            'type',
            'index'
        ],
        computed: {
            ...mapState([
                'channelList',
                'changeChannel'
            ])
        },
        methods: {
            ...mapActions([
                'moveTags'
            ]),
            changeTag (type, index) {
                this.moveTags(
                    {
                        type: type,
                        idx: index
                    });
            }
        }
    }
</script>
<style lang="less">
    .channel-span-box {
        float: left;
        width: 25%;
        text-align: center;
        box-sizing: border-box;
        padding: 0 0.2rem;
        margin-bottom: 0.2rem;
        font-size: 0;
        .channel-span {
            width: 100%;
            color: #393939;
            font-size: 0.32rem;
            font-weight: 400;
            display: inline-block;
            border: 1px solid #ccc;
            animation: showBig .3s ease;
            height: 0.6rem;
            line-height: 0.6rem;
        }
        @keyframes showBig {
            0% {
                transform: scale(0);
                display: none;
            }
            100% {
                display: inline-block;
                transform: scale(1);
            }
        }
    }
</style>