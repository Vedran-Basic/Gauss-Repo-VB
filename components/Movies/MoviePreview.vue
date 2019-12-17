<template>
  <nuxt-link :to="'/movies/' + movieInstance.imdbID" class="movie-preview">
    <article class="movie-preview">
      <div class="movie-thumbnail" :style="{backgroundImage: 'url(' + movieInstance.Poster + ')' }" ></div>
      <div class="movie-content">
        <h1> {{ movieInstance.Title }}</h1>
        <p> {{ movieInstance.Year }} </p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>

  export default {
    name: 'MoviePreview',
    props: {
      movieInstance : Object
  }
}
  

</script>

<style scoped>

  .movie-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px rgb(0, 29, 255);
    background-color: rgb(0, 138, 255);
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
