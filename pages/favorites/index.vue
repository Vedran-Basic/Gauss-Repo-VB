<template>
  <div class="container">
    {{  }}
    <MoviePreview v-if="isEmpty"/>
  </div>
</template>



<script>
  import {mapState} from 'vuex'
  import MoviePreview from '~/components/Movies/MoviePreview'
  export default {
    components:{
      MoviePreview
    },
    async asyncData(){

    },
    computed:{/*
          ...mapState('favMovies',{
            favMoviesList: 'favMoviesList'
          }),
          isEmpty(){
            if(favMoviesList.length === 0)return false 
            return true
          }
        },*/
        methods: {
          removeFromFavs(){
            this.$store.dispatch('favMovies/removeFromFavorites', this.movie.imdbID)
          },
          

      }
  }

  }
</script>


<style scoped>

</style>