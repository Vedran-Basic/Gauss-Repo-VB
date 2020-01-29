<template>
  <div class="container">

      <div class="register-links">
        <a href="/users"
           class="my-button">
          Users page
        </a>
        <nuxt-link to="/users" class="my-button">Users - Single Page Application</nuxt-link>
      </div>

      <section class="featured-movies">
        <movie-preview v-for="item in data.Search" :key="item.imdbID" :movie-instance="item" />
      </section>
  </div>
</template>

<script>
  import MoviePreview from "~/components/Movies/MoviePreview";
  export default {
    components: {
      MoviePreview
    },



    async asyncData({ params, $axios }) {
      let { data } = await $axios.get('http://www.omdbapi.com/?apikey=dd5fbf0a&s=Batman')
      return { data }
    }
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
</style>
