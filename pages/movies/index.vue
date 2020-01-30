<template>
  <div class="container">
      <section class="featured-movies">
        <movie-preview v-for="item in data.Search" :key="item.imdbID" :movie-instance="item" />
      </section>
  </div>
</template>

<script>
  import MoviePreview from '~/components/Movies/MoviePreview'
  export default {
    components: {
      MoviePreview
    },
   
    async asyncData({ params, $axios }) {
      let thisYear= new Date
      let { data }= await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&type=movie&y=${thisYear.getFullYear()}`)
      return { data }
    },
  
    created() {
      console.log(this.data)
    }
  }

</script>

<style scoped>






</style>