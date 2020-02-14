<template>
  <div class="container">
      <FilterMovies @ApplyFilters="applyFilters"/>
      <h1> Search results:</h1>

      <div class="pagination-div">
        <pagination :pages="this.pages"/>
      </div>
      <section class="searched-movies">
        <movie-preview v-for="item in movieSearch" :key="item.imdbID" :movies="item" @addToFavs="addToFavorites" @removeFromFavs="removeFromFavorites"/>
      </section>

      <div class="pagination-div">
        <pagination :pages="this.pages"/>
      </div>
      <span class="search-error" v-if="this.Response==='False'"> {{ this.Error }} </span>
  </div>
</template>

<script>
  import FilterMovies from "~/components/filter";
  import MoviePreview from '~/components/Movies/MoviePreview'
  import pagination from '~/components/pagination'
  export default {
    data(){
      return{
        pages: 0,
        movieSearch: [],
        Response: '',
        getError: '',
        currentPage:1,
        genre:'all',
        year:''
      }
    },
    components: {
      MoviePreview, pagination, FilterMovies
    },
   created(){
     console.log("created")
     this.searchDatabase()
   },
    /*async asyncData({ route, $axios }) {
      if(route.query.pageNumber===undefined){
        let pageNumber=1
        let { data }= await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&s=${route.query.results}&page=${pageNumber}&type=movie`)
        return { data }
        }
      else{
        let { data }= await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&s=${route.query.results}&page=${route.query.pageNumber}&type=movie`)
        return { data }
        }
      },*/
    watch:{
      $route:{
      handler: 'searchDatabase',
      deep: true
      }
    },
    methods:{
      addToFavorites($event){
        this.$store.dispatch('favMovies/addToFavorites', $event)
      },
      removeFromFavorites($event){
        this.$store.dispatch('favMovies/removeFromFavorites', $event)
      },
      async searchDatabase(){
        try{
          const baseUrl ='http://www.omdbapi.com/?apikey=dd5fbf0a'
          const searchResults = this.$route.query.results
          if(this.$route.query.pageNumber===undefined){
            this.currentPage=1
          }else{
            this.currentPage=this.$route.query.pageNumber
          }
          if(this.genre==='all') {
            this.genre=''
            
            }
            const response = await this.$axios.get(baseUrl, {
              params:{
                s: searchResults,
                page: this.currentPage,
                type:this.genre,
                y:this.year
              }
            })
    
            const { data } = response
            const {totalResults, Search, Response} = data
            this.pages = Math.ceil(Number(totalResults)/10)
            this.Response = Response
            this.movieSearch.splice(0, this.movieSearch.length, ...Search)  
          }
        catch(err){
          console.log(err)
          }
        },
      applyFilters($event){
        this.genre= $event.genre
        this.year=$event.year
        console.log("APPLY FILTER")
        this.$route.query.pageNumber='flag'
        this.searchDatabase()
      },
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
