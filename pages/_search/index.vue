<template>
  <div class="container">
      <section class="searched-movies">
        <movie-preview v-for="item in data.Search" :key="item.imdbID" :movie-instance="item" />
      </section>
      <pagination/>
  </div>
</template>

<script>
  import MoviePreview from '~/components/Movies/MoviePreview'
  import pagination from '~/components/pagination'
  export default {
    components: {
      MoviePreview, pagination
    },

    watchQuery(newQuery, oldQuery){
      if(oldQuery!=newQuery)
        return newQuery;
    },
   
    async asyncData({ route, $axios }) {
      if(route.query.pageNumber===undefined){
        let pageNumber=1
        let { data }= await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&s=${route.query.results}&page=${pageNumber}&type=movie`)
        return { data }
        }
      else{
        let { data }= await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&s=${route.query.results}&page=${route.query.pageNumber}&type=movie`)
        return { data }
        }
      }
  }

</script>

<style scoped>
.searched-movies{
    align-items: center;
    justify-content: center;
    overflow:visible;
}

.pagination{
    display:inline-block;
    align-items: center;
    justify-content: center;
    overflow:visible;
}



</style>