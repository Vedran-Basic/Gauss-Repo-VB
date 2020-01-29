<template>
  <div class="container">
    <div v-if="this.data.Response !== 'False' ">
      <section class="searched-movies">
        <movie-preview v-for="item in data.Search" :key="item.imdbID" :movie-instance="item" />
      </section>
      <pagination :total="data.totalResults"/>
    </div>
      <span class="movie-not-found" v-if="this.data.Response==='False'">{{ this.data.Error }} </span>
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
/*
.searched-movies{
    align-items: center;
    justify-content: center;
    overflow:visible;
}
*/
.pagination{
    display:inline-block;
    align-items: center;
    justify-content: center;
    overflow:visible;
}
.movie-not-found{
  display: block;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 50px;
  color: white;
}

  .searched-movies {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>