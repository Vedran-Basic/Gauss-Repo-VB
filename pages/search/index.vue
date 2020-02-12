<template>
  <div class="container">
    <div v-if="this.data.Response !== 'False' ">
      <h1> Search results:</h1>

      <div class="pagination-div">
        <pagination :total="data.totalResults"/>
      </div>
      <section class="searched-movies">
        <movie-preview v-for="item in data.Search" :key="item.imdbID" :movies="item" @addToFavs="addToFavorites" @removeFromFavs="removeFromFavorites"/>
      </section>

      <div class="pagination-div">
        <pagination :total="data.totalResults"/>
      </div>
    </div>
      <span class="search-error" v-if="this.data.Response==='False'">{{ this.data.Error }} </span>
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
      },
    methods:{
      addToFavorites($event){
        this.$store.dispatch('favMovies/addToFavorites', $event)
      },
      removeFromFavorites($event){
        this.$store.dispatch('favMovies/removeFromFavorites', $event)
      }
      }
      
  }

</script>

<style scoped>

.search-error{
  display: block;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 50px;
  color: black;
}

  .searched-movies {
    display: flex;
    padding: 0px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .pagination-div{
    display: flex;
    padding-top:0px;
    justify-content: center;
  }
  h1{
    text-align: center;
    color:black;
    font-size: 55px;
    margin:10px auto;
  }
</style>
