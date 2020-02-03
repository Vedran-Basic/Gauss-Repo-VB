<template>
  <div>
    <div class="card">
    <nuxt-link :to="'/movies/' + movieInstance.imdbID" @click="storeMovie(movieInstance)">
          <div class="upper">
            <img class="movie-pic" v-if="movieInstance.Poster==='N/A'" src="~/static/undefinedPic.jpg">
            <img v-else class="movie-pic" :src="movieInstance.Poster" >
          </div>
          <div class="lower">
            <div class="movie-content">
            
              <h1> {{ movieInstance.Title }}  ({{ movieInstance.Year }}) </h1>
           
            </div>
          </div>
    </nuxt-link>
    <div class="star-icon">

      <div class="absolute" v-if="isInFavorites" @click="addToFavs">
        <img v-if="isInFavorites" class="empty-star" src="@/static/empty-star.png" >
      </div>
      <div class="absolute" v-if="!isInFavorites" @click="removeFromFavs">
        <img v-if="!isInFavorites" class="full-star" src="@/static/full-star.png">
      </div>
    </div>
  </div>
    
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
          ]),
          addToFavs(){
            this.$emit('addToFavs', this.movieInstance)
          },
          removeFromFavs(){
            this.$emit('removeFromFavs', this.movieInstance)
          }
      },
      computed:{
        isInFavorites(){
          let isIt= false
          let favorites = this.$store.getters['favMovies/getFavMoviesList']
          favorites.forEach((item)=>{
            if(item.imdbID===this.movieInstance.imdbID){
              isIt=true
            }
          })
            return !isIt  
      }

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
  height: 30px;
  width:30px;  
  position: relative;
}
.absolute{
  position: absolute;
  bottom:30px;
  left:1px;
  background-color:#B458B1;
  padding:5px;
  cursor:pointer;

}
.full-star{
  height: 30px;
  width:30px;
  padding:0;
  margin:0;
}
.empty-star{
  height: 30px;
  width:30px;
  padding:0;
  margin:0;  
}

.absolute:hover{
  background-color: #7156E8;
}
.absolute:active{
  background-color:#ccc;
}


</style>
