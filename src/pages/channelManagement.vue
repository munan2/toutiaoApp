<template>
    <div>
        <com-header :headerTitle="headerTitle" :backType="backType"></com-header>
        <channel-box></channel-box>
    </div>
</template>
<script>
    import comHeader from '../components/comHeader'
    import channelBox from '../components/channelBox'
    export default {
        components: {
            comHeader,
            channelBox
        },
        data () {
            return {
                headerTitle: '频道管理',
                backType: 'channel'
            }
        }
    }
</script>