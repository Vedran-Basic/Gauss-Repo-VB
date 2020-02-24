<template>
  <div class="container">
    <template v-if="this.Response==='True'">
      <FilterMovies @ApplyFilters="applyFilters"/>
      <h1> Search results:</h1>

      <div class="pagination-div">
        <v-pagination
        v-model="currentPage"
        :length="pages"
        :total-visible="totalVisible"
        @input="next"
      ></v-pagination>      
      </div>
      <section class="searched-movies">
        <movie-preview v-for="item in movieSearch" :key="item.imdbID" :movies="item" @addToFavs="addToFavorites" @removeFromFavs="removeFromFavorites"/>
      </section>
      <div class="pagination-div">
        <v-pagination
        v-model="currentPage"
        :length="pages"
        :total-visible="totalVisible"
        @input="next"
      ></v-pagination>      
      </div>
    </template>
      <span class="search-error" v-if="this.Response==='False'"> {{ this.error }} </span>
  </div>
</template>

<script>
  import FilterMovies from "~/components/filter";
  import MoviePreview from '~/components/Movies/MoviePreview'
  import pagination from '~/components/pagination'
  export default {
    data(){
      return{
        totalVisible:9,
        pages: 0,
        movieSearch: [],
        Response: '',
        error: '',
        currentPage:1,
        genre:'all',
        year:''
      }
    },
    components: {
      MoviePreview, pagination, FilterMovies
    },
   created(){
     this.searchDatabase()
   },
    watch:{
      $route:{
      handler: 'searchDatabase',
      deep: true
      },
      '$route.query.results': {
        handler:'resetFilters'
      }
    },
    methods:{
      resetFilters(){
        this.year=''
        this.genre='all'
        this.searchDatabase()
      },
      next (page) {
        if(page===1){
          this.$router.push({path:'/search', query:{results: this.$route.query.results}} )
        }
        else{
          this.$router.push({path:'/search', query:{results: this.$route.query.results, pageNumber: page}} )
          }
      },
      addToFavorites($event){
        this.$store.dispatch('favMovies/addToFavorites', $event)
      },
      removeFromFavorites($event){
        this.$store.dispatch('favMovies/removeFromFavorites', $event)
      },
      async searchDatabase(){
        try{
          /* dohvacanje podataka*/
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
          /* destrukturiranje*/
          const { data } = response
          const {totalResults, Search, Response} = data
          this.pages = Math.ceil(Number(totalResults)/10)
          this.Response = Response
          this.movieSearch.splice(0, this.movieSearch.length, ...Search)  
          }
        catch(err){
          console.log(err)
          this.error=error
          }
        },
      applyFilters($event){
        this.genre= $event.genre
        this.year=$event.year
        this.$route.query.pageNumber=1
        this.currentPage=1
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
