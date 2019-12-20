<template>
  <div class="container">
      <section class="searched-movies">
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
      console.log(params)
      let { data }= await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&s=${params.search}`)
      return { data }
    }

  }

</script>

<style scoped>
.searched-movies{
    align-items: center;
    justify-content: center;
    overflow:visible;
}





</style>