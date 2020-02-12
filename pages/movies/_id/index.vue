<template>
  <div class="container">
      <v-card dark>
        <v-container>
          <v-row flex-row justify="space-between">
            <v-col cols="4">
              <v-img
                max-height="auto"
                max-width="900"
                :src="movie.Poster"
                fill
              ></v-img>
            </v-col>

            <v-col cols="6" class="text-center" >
              <v-row class="flex-column" justify="center">
                <v-col cols="12" >
                  <h1> {{ movie.Title }} ({{ movie.Year }})</h1>
                </v-col>
              </v-row>
              <v-row class="flex-column" justify="center" >
                <v-col>
                  <p> {{ movie.Plot }} </p>
                </v-col>
              </v-row>
                <v-spacer></v-spacer>
                
                <v-btn v-if="isInFavorites" @click="addToFavs()" class="my-button"> Add to favorites </v-btn>
                <v-btn v-if="!isInFavorites" @click="removeFromFavs()" class="my-button"> Remove from favorites </v-btn>
            </v-col>

          </v-row>
        </v-container>
      </v-card>
      <div class="card">
        <div class="left">
          <img class="image" :src="movie.Poster" >
        </div>
        <div class="right"> 
          <h1> {{movie.Title}} </h1>
          <hr>
          <p class="about"> {{movie.Plot}}</p>
          
          
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