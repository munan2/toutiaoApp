<template>
    <div class="container">
        <my-header></my-header>
        <news-content></news-content>
    </div>
</template>
<script>
    import myHeader from '../components/myHeader.vue'
    import newsContent from '../components/newsContent'
    export default {
      name: 'App',
      data () {
        return {
  
        }
      },
      components: {
        myHeader,
        newsContent
      }
    }
</script>