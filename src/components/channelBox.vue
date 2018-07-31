<template>
    <div class="channel-content-box">
        <div class="channel-box">
            <span class="channel-box-title">点击删除以下频道</span>
            <div class="have-channel-box">
                <channel-span v-for="(item, index) in channelList.hasChannelList.list" :channelName="item.name" :key="index" :type=0 :index="index"></channel-span>
            </div>
        </div>
        <div class="channel-box">
            <span class="channel-box-title special-title" v-if="channelList.changeChannel==true">最多16个频道，请先删除一些</span>
            <span class="channel-box-title" v-else>点击添加以下频道</span>
            <div class="no-channel-box">
                <channel-span v-for="(item, index) in channelList.noChannelList.list" :channelName="item.name" :key="index" :type=1 :index="index"></channel-span>
            </div>
        </div>
    </div>
</template>
<script>
    import channelSpan from './channelSpan'
    import { mapState, mapActions, mapGetters} from 'vuex'
    export default {
        components: {
            channelSpan
        },
        data () {
            return {
            }
        },
        computed: {
            ...mapState([
                'channelList'
            ]),
            ...mapGetters([
                'hasChannel'
            ])
        },
        methods: {
            ...mapActions ([
                'moveTags'
            ])
        }
    }
</script>
<style lang="less">
    .channel-content-box {
        background: #f8f8f8;
        height: 100vh;
        .channel-box {
            font-size: 0.24rem;
            .channel-box-title {
                color: #666;
                display: block;
                padding: 0.1rem 0.2rem;
                background: #f5f5f5;
                font-weight: 300;
            }
            .special-title {
                color: #f00;
            }
            .have-channel-box, .no-channel-box {
                overflow: auto;
                padding: 0.2rem 0;
            } 
        }
    }
</style>