<template>
  <div>
    <nuxt-link :to="'/movies/' + movieInstance.imdbID" @click="storeMovie(movieInstance)">
        <div class="card">
          <div class="upper">
            <img class="movie-pic" v-if="movieInstance.Poster==='N/A'" src="~/static/undefinedPic.jpg">
            <img v-else class="movie-pic" :src="movieInstance.Poster" >
          </div>
          <div class="lower">
            <div class="movie-content">
            
              <h1> {{ movieInstance.Title }}  ({{ movieInstance.Year }}) </h1>
           
            </div>
          </div>
        </div>
    </nuxt-link>
    <img class="star-icon" src="https://img.icons8.com/color/48/000000/star--v1.png">
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'MoviePreview',
    props: {
      movieInstance : Object
  },
      methods:{
      ...mapActions('favMovies',[
          'storeMovie'
          ])
      }
}
  

</script>

<style scoped>

  .card {
    border: 1px solid #ccc;
    background-color: rgb(11, 37, 59);
    height:450px;
  }

  a {
    text-decoration: none;
    color: white;
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

  .card:hover
   {
    background-color: rgb(94, 92, 92);
  }
  .card:active{
    background-color: #ccc
  }

.upper {
    padding:5px;
    display: flex;
    justify-content: center;
    height:75%;
}
.lower{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 25%;
}
.movie-pic {   
min-width: 100%;
min-height: 100%;
object-fit:contain;

}
h1{
  padding:0px auto;
}
.star-icon{
  padding:0;
  margin:0;
  height: 30px;
  width:30px;
}

</style>
