<template>
    <div>
        <div class="modal-container">
        </div>
        <div class="modal-box">
            <span class="modal-close" @click="changeModal()"></span>
            <div class="modal-background"></div>
            <p class="modal-title">已加载好您感兴趣的头条</p>
            <div class="modal-btn">立即打开</div>
        </div>
    </div>
    
</template>
<script>
    import store from '../store/'
    export default {
        data () {
            return {

            }
        },
        methods: {
            changeModal () {
                store.state.modalFlag = false;
            }
        }
    }
</script>
<style lang="less">
    .modal-container {
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 990;
        background: #000;
        opacity: 0.4;
    }
    .modal-box {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 5.4rem;
        height: 4.4rem;
        background: #fff;
        border-radius: 10px;
        margin-left: -2.7rem;
        margin-top: -2.2rem;
        z-index: 999;
        opacity: 1;
        padding: 0.2rem;
        box-sizing: border-box;
        text-align: center;
        .modal-close {
            position: absolute;
            right: 0.2rem;
            top: 0.2rem;
            width: 0.33rem;
            height: 0.31rem;
            background: url(../assets/images/close-icon.png) no-repeat;
            background-size: 100%;
        }
        .modal-background {
            width: 3.31rem;
            height: 2.41rem;
            background: url(../assets/images/modal-background.png) no-repeat;
            background-size: 100%;
            margin-left: 0.7rem;
        }
        .modal-title {
            font-size: 0.34rem;
            color: #a5a5a5;
        }
        .modal-btn {
           width: 4.2rem;
           height: 0.75rem;
           background: #ff6762;
           color: #fff;
           font-size: 0.4rem;
           line-height: 0.75rem;
           text-align: center;
           border-radius: 5px;
           position: absolute;
           bottom: 0.1rem;
           left: 50%;
           margin-left: -2.1rem;
        }
    }
</style>