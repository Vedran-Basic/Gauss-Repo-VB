<template>
  <div class="container">
    <section class="featured-movies">
      <!--
  <MoviePreview id="1" thumbnail="~assets/pictures/slap.jpg" title="oof" previewText="Get slapped! - documentary movie about slapping" />
      ' + thumbnail + ' -->
      <img src="~assets/pictures/slap.jpg" />

      <nuxt-link :to="'/movies/' + 1" class="movie-preview">
        <article class="movie-preview">
          <div class="movie-thumbnail" style="background-image: url('/assets/pictures/slap.jpg')"></div>
          <div class="movie-content">
            <h1> opa</h1>
            <p> wopa </p>
          </div>
        </article>
      </nuxt-link>

    </section>
  </div>
</template>

<script>

  export default {
    name: 'MoviePreview',
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      previewText: {
        type: String,
        required: true
      },
      thumbnail:{
        type: String,
        required: true
      }

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
