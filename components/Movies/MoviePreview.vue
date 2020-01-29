<template>
  <div @click="tempStoreMovie(movieInstance)">
    <nuxt-link :to="'/movies/' + movieInstance.imdbID">
        <div class="card">
          <div class="upper">
            <img :src="movieInstance.Poster" >
          </div>
          <div class="lower">
            <div class="movie-content">
            
              <h1> {{ movieInstance.Title }}  {{ movieInstance.Year }} </h1>
              <p> {{  }} </p>
            
            </div>
          </div>
        </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

  export default {
    name: 'MoviePreview',
    props: {
      movieInstance : Object
  },
      methods:{
          tempStoreMovie(movieInstance){
            
          }
      /*  ...mapMutations([
          'tempStoreMovie',
          'removeCurrentMovie',
          'addToFavs'])*/
        
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

  .movie-thumbnail {
    background-position: center;
    background-size: cover;
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

</style>
