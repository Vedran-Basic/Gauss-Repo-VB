<template>
  <div class="container">
    
    <section class="movie">
      <div class="card">
        <!--<div class="left" :style="{backgroundImage: `url(${movie.Poster})` }" > </div>-->
        <div class="left">
          <img class="image" :src="movie.Poster" >
        </div>
        <div class="right"> 
          <h1> {{movie.Title}} </h1>
          <hr>
          <p class="about"> {{movie.Plot}}</p>
          <button @click="addToFavs(movie)" class="my-button"> Add to favorites </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    async asyncData({ params, $axios }) {
      let response = await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&i=${params.id}`)
      return {
        movie: response.data        
        }
    },
    data(){
      return{

      }
    },
    methods: {
      ...mapMutations([
      'addToFavs'
    ])
  },
  mounted(){
    this.$store.dispatch('favMovies/handle', this.movie)
  }
    // created() {
    //   console.log(this)
    //   }
  }
</script>

<style scoped>
.card {
  display:block;
  width:2000px;
  height:fit-content;
  position:absolute;
  left:0;
  right:0;
  margin:50px auto;
  top:13vh;
  bottom:0;
  border:10px solid black;
  background-color:black;

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
    height: auto;
    float:left;
    height:400px;
    border-radius:0 10px 10px 0;
  }

  .image {
      width:100%;
      height:auto;
      border-radius:10px 0 0 10px;
      object-fit: cover;

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
    bottom:20px;
    right:20px;

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