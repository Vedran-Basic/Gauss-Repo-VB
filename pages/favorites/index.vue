<template>
  <div class="container">
    {{  }}
    <MoviePreview v-if="false"/>
  </div>
</template>



<script>
  import {mapState} from 'vuex'
  import MoviePreview from '~/components/Movies/MoviePreview'
  export default {
    components:{
      MoviePreview
    },
    data(){
      return{
        userIsActive:true
      }
    },
    async asyncData({store, $axios}){
      store.dispatch('favMovies/getFavorites')
    },
        methods: {
          removeFromFavs(){
            this.$store.dispatch('favMovies/removeFromFavorites', this.movie.imdbID)
          },
          

      }
  }
</script>


<style scoped>

</style>