<template>
  <div class="container">

    <section class="featured-movies">
      <movie-preview v-for="item in movies" :key="item.imdbID" :movies="item" @addToFavs="addToFavorites" @removeFromFavs="removeFromFavorites" />
    </section>
  </div>
</template>

<script>
  import MoviePreview from "~/components/Movies/MoviePreview";
  export default {
    data(){
      return{
        searchContent: this.$route.query.results,
        }
    },
    components: {
      MoviePreview
    },

    async asyncData({ params, $axios }) {
      let { data } = await $axios.get('http://www.omdbapi.com/?apikey=dd5fbf0a&s=Batman')
      return { movies: data.Search }
    },
    methods:{
      addToFavorites($event) {
        this.$store.dispatch('favMovies/addToFavorites', $event)
      },
      removeFromFavorites($event){
        this.$store.dispatch('favMovies/removeFromFavorites', $event)
      }
    },

  }
</script>

<style>
  .register-links {
    display:flex;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align:center;
    
  }


  .featured-movies {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .card-text{
    display:flex;
    text-align:center;
    justify-content:center;
    padding:5px;
  }
</style>
