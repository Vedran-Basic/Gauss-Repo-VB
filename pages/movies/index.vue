<template>
  <div class="container">
    <section class="featured-movies">
      <movie-preview v-for="item in data.Search" :key="item.imdbID"  :movie-instance="item"/>
    </section>
  </div>
</template>

<script>
  import MoviePreview from "~/components/Movies/MoviePreview";


  export default{
    components: {
      MoviePreview
    },

    async asyncData({ params, $axios }) {
      let { data } = await $axios.get('http://www.omdbapi.com/?apikey=dd5fbf0a&s=Batman}')
      return {data}
    },
    created(){
     
    }
  }


</script>

<style scoped>


  .featured-movies {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }





  .movie-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 850px) {
    .movie-preview {
      width: 400px;
      margin: 10px;
    }
  }

  .movie-thumbnail {
    width: 100%;
    height: 200px;
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
</style>
