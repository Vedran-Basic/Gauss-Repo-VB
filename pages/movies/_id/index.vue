<template>
  <div class="container">
      <div class="card">
        <div class="left">
          <img class="image" :src="movie.Poster" >
        </div>
        <div class="right"> 
          <h1> {{movie.Title}} </h1>
          <hr>
          <p class="about"> {{movie.Plot}}</p>
          
          <button v-if="isInFavorites" @click="addToFavs()" class="my-button"> Add to favorites </button>
          <button v-if="!isInFavorites" @click="removeFromFavs()" class="my-button"> Remove from favorites </button>
        </div>
        
      </div>


  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        searchContent: ''
      }
    },
    async asyncData({store, params, $axios}) {
      const movieSingle = await store.dispatch('favMovies/fetchSingleMovie', {omdbID: params.id, $axios})
    },
    computed:{
      ...mapState('favMovies',{
        movieState: 'currentMovie'
      }
      ),
      movie(){
        return this.$store.state.favMovies.currentMovie
      },
      isInFavorites(){
        let isIt= false
        this.$store.state.favMovies.favMoviesList.forEach((item)=>{
          if(item.imdbID===this.movie.imdbID){
            isIt=true
          }
          })
          return !isIt
      }

    },
    methods: {
      addToFavs(){
        this.$store.dispatch('favMovies/addToFavorites', this.movie)
      },
      removeFromFavs(){
        this.$store.dispatch('favMovies/removeFromFavorites', this.movie)

      }

  }
  }
</script>

<style scoped>
.searchbar{
  display: inline-block;
}
.card {
  display:flex;
  width:1000px;
  margin:50px auto;
  border:10px solid black;
  background-color:black;
  height:500px;

  }
  .left {
    width:40%;
    height:auto;
    float:left;
  }
  .right {
    position:relative;
    color:white;
    width:60%;
    float:left;
    border-radius:0 10px 10px 0;
  }

  .image {
      width:100%;
      height:100%;
      border-radius:10px 0 0 10px;
      object-fit:contain;

    }


   h1 {
    color:white;
    font-family: 'Montserrat', sans-serif;
    font-weight:400;
    text-align:left;
    font-size:40px;
    margin:30px 0 0 0;
    padding:0 0 0 40px;
    letter-spacing:1px;
   }
  hr{
    color:lightskyblue;
    width:92%;
  }

  .movie-title{
  text-decoration: none;
  text-align: center;
  justify-content: center;
  font-size: 50px;
  color:white;
  }

  .movie-image{
    display:inline-block;
    width: 100%;
    height: 600px;
    background-position: center;
    background-size: cover;
    float:left;
  }
  .about{
    font-size:30px;
    color:white;
    padding-left: 50px;
    width:auto;
    text-align: left;
    justify-content: center;
    text-justify: inter-word;
  }

  .right button{
    position:absolute;
    bottom:0px;
    right:0px;
  }
</style>



      <!--async asyncData({ params, $axios }) {
        let api = 'http://www.omdbapi.com/?apikey=dd5fbf0a&i='
        let TheomdbID = $route.params.id
        let url = api + TheomdbID
        let { data } = await $axios.get(url)
        return { data }
      },-->

       <!--async asyncData({ params, $axios }) {
      let { data } = await $axios.get('http://www.omdbapi.com/?apikey=dd5fbf0a&s=batman')
      return { data }
      }-->



  // export default {
  //   async asyncData({ params, $axios }) {
  //     let response = await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&i=${params.id}`)
  //     return response.data
  //   },
  //   mounted() {
  //       console.log(this)
  //     }
  //   }

    // mounted() {
    //   this.$axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&i=${this.$route.params.id}`).then(res =>{
    //     this.data = res.data
    //     console.log(res)
    //   })
    // }