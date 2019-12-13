<template>
  <nuxt-link :to="'/movies/' + id" class="movie-preview">
    <article class="movie-preview">
      <div class="movie-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')' }" ></div>
      <div class="movie-content">
        <h1> {{ title }}</h1>
        <p> {{ previewText }} </p>
      </div>
    </article>
  </nuxt-link>
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
      thumbnail: {
        type: String,
        required: true
      }

    }
  }


</script>

<style scoped>

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
