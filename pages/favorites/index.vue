<template>
  <div class="container">
    
    <v-data-table v-model="selected"
                  :headers="headers"
                  :items="movies"
                  item-key="name"
                  class="elevation-1 table"
                  hide-default-footer
                  >

<template v-slot:body="{ items }">
<tbody>
  
<tr v-for="(item, index) in items" :key="index" @click="redirectToMovie(item.imdbID)" >
  <td>
        <div class="image-div">
          <v-img :src="item.Poster"></v-img>
        </div>
  </td>
  <td><h3> {{item.Title}}</h3></td>
  <td><h3> {{item.Year}}</h3></td>
</tr>
</tbody>
</template>
      

    </v-data-table>
    
  </div>
</template>



<script>
  import { mapGetters } from 'vuex'
  import MoviePreview from '~/components/Movies/MoviePreview'
  export default {
    components:{
      MoviePreview
    },
    data(){
      return {
        selected: [],
        headers: [
          { text: " ", align: 'start', value: "Poster", sortable: false, 
         },
          {
            text: 'Movie title',
            sortable: true,
            align: 'start',
            value: 'Title',
          },
          { text: 'Year',align: 'start', value: 'Year' }
        ],
        movies:[]
      }
    },
    mounted(){
      this.movies = this.$store.getters['favMovies/getFavMoviesList']
    },
    methods: {
      removeFromFavs() {
        this.$store.dispatch('favMovies/removeFromFavorites', this.movies.imdbID)
      },
      redirectToMovie(imdbID){
        this.$router.push("/movies/" + imdbID)
      }
    }

  }
</script>


<style scoped>
  .image-div{
    width:150px;
  }
  .table{
    background-color:#69A7D0;
    color:black;
  }

.table table tr:hover{
  background-color: lightgoldenrodyellow !important;
  cursor: pointer;

}
.table table td{
  text-align: left;
}
</style>
