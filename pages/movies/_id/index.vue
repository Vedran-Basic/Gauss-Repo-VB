<template>
  <div class="container">
    
    <section class="movie">
      <h1> </h1>
      <div class="movie-details">
      </div>
      <div class="movie-title"> {{movie.Title}}: </div>
      <div class="movie-title"> {{mojeIme}}: </div>
      <div class="movie-image" :style="{backgroundImage: 'url(' + movie.Poster + ')' }" ></div>
      <div class="about"> {{movie.Plot}} </div>
      <div class="stars"></div>
    </section>
    
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $axios }) {
      let response = await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&i=${params.id}`)
      return {
        movie: response.data,
        mojeIme: "perkan merkana"
        }
    },
    
    // created() {
    //   console.log(this)
    //   }
  }
</script>

<style scoped>

  .movie-title{
  text-decoration: none;
  text-align: center;
  justify-content: center;
  font-size: 50px;
  color:white;
  }

  .movie-image{
    display:inline-block;
    width: 100%;
    height: 600px;
    background-position: center;
    background-size: cover;
    float:left;
  }
  .about{
    color:white;
    padding: 0;
    width:200px;
    float: right;
    text-align: left;
    justify-content: center;
    text-justify: inter-word;
  }
</style>



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



  // export default {
  //   async asyncData({ params, $axios }) {
  //     let response = await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&i=${params.id}`)
  //     return response.data
  //   },
  //   mounted() {
  //       console.log(this)
  //     }
  //   }

    // mounted() {
    //   this.$axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&i=${this.$route.params.id}`).then(res =>{
    //     this.data = res.data
    //     console.log(res)
    //   })
    // }