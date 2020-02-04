<template>
  <div class="container">
    
    <v-data-table v-model="selected"
                  :headers="headers"
                  :items="movies"
                  item-key="name"
                  class="elevation-1 table"
                  hide-default-footer
                  hide-default-header
                  >

      <template v-slot:body="{ items }">
        <tbody>
          <tr v-if="items.length===0">
            <td class="no-data"> You don't have any favorites </td>
          </tr>
          <tr v-for="(item, index) in items" :key="index" >
            <td @click="redirectToMovie(item.imdbID)"> <div class="image-div"> <v-img :src="item.Poster"></v-img> </div></td>
            <td @click="redirectToMovie(item.imdbID)"> <h3> {{item.Title}}</h3> </td>
            <td @click="redirectToMovie(item.imdbID)"> <h3> {{item.Year}}</h3> </td>
            <td> <button class="my-button" @click="removeFromFavs(item)"> Remove from favorites </button> </td>
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
          { text: " ", align: 'left', value: "Poster", sortable: false, 
         },
          {
            text: 'Movie title',
            sortable: true,
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
      removeFromFavs(item) {
        this.$store.dispatch('favMovies/removeFromFavorites', item)
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
  text-align: center;
}

.my-button{
    color: black ;

}

.my-button:hover {
  color: #494949;
  }
.no-data{
  font-size: 30px;
  background-color:#69A7D0;
  cursor:default;
}

</style>
