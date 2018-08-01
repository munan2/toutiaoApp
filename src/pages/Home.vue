<template>
    <div class="container">
        <my-header></my-header>
        <news-content></news-content>
        <com-modal v-if="modalFlag == true"></com-modal>
    </div>
</template>
<script>
    import myHeader from '../components/myHeader.vue'
    import newsContent from '../components/newsContent'
    import comModal from '../components/comModal'
    import {mapState} from 'vuex'
    export default {
      name: 'App',
      data () {
        return {
            
        }
      },
      components: {
        myHeader,
        newsContent,
        comModal
      },
        computed: {
            ...mapState({
                modalFlag (state) {
                    return state.modalFlag
                }
            })
        }
    }
</script>