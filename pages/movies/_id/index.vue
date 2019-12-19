<template>
  <div class="container">
    <section class="movie">
      <h1> </h1>
      <div class="movie-details">
      </div>
      <p> Results for {{$route.params.id}}: </p>
      <div class="stars"></div>
    </section>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $axios }) {
      let { data } = await $axios.get('http://www.omdbapi.com/?apikey=dd5fbf0a&i=tt0372784')
      return { data }
    },
    created() {
      console.log(this.data)
    }
  }
</script>



      <!--async asyncData({ params, $axios }) {
        let api = 'http://www.omdbapi.com/?apikey=dd5fbf0a&i='
        let TheomdbID = $route.params.id
        let url = api + TheomdbID
        let { data } = await $axios.get(url)
        return { data }
      },-->
       <!--async asyncData({ params, $axios }) {
      let { data } = await $axios.get('http://www.omdbapi.com/?apikey=dd5fbf0a&s=batman')
      return { data }
      }-->
