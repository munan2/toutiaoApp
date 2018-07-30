<template>
    <div class="news-container">
        <card-box></card-box>
    </div>
</template>
<script>
    import cardBox from '../components/cardBox'
    export default {
        data () {
            return {

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