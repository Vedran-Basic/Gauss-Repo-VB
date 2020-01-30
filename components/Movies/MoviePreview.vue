<template>
  <div @click="storeMovie(movieInstance)">
    <nuxt-link :to="'/movies/' + movieInstance.imdbID">
        <div class="card">
          <div class="upper">
            <img v-if="movieInstance.Poster" :src="movieInstance.Poster" >
            <img v-else src="https://www.tate.org.uk/art/images/work/L/L01/L01682_10.jpg">
          </div>
          <div class="lower">
            <div class="movie-content">
            
              <h1> {{ movieInstance.Title }}  ({{ movieInstance.Year }}) </h1>
              <p>  </p>
            
            </div>
          </div>
        </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'MoviePreview',
    data(){
      return{
        undefinedPoster: String
      }
    },
    props: {
      movieInstance : Object
  },
      methods:{
      ...mapActions('favMovies',[
          'storeMovie'
          ])
        
      },
      async asyncData({$axios}){
        let res = $axios.get('https://www.tate.org.uk/art/images/work/L/L01/L01682_10.jpg')
        return res.data
      },
      mounted(){
        console.log(this.data)
      }
        
    
}
  

</script>

<style scoped>

  .card {
    border: 1px solid #ccc;
    background-color: rgb(0, 138, 255);
    width: 90%;
    
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 850px) {
    .card {
      width: 400px;
      margin: 10px;
    }
  }
  
  .movie-content {
    padding: 10px;
    text-align: center;
  }

  a:hover .movie-content,
  a:active .movie-content {
    background-color: #ccc;
  }

    .featured-movies {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

.upper {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
}
.fill img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
}
</style>
