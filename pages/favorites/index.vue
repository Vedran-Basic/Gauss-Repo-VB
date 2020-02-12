<template>
  <div class="container">
    
    <v-data-table v-model="selected"
                  :headers="headers"
                  :items="movies"
                  :search="searchFavorites"
                  :custom-filter="filterByTitle"
                  item-key="name"
                  class="elevation-1 table"
                  hide-default-header
                  hide-default-footer
                  >

      <template v-slot:header>
        <v-text-field
        v-model="searchFavorites"
        label="Search favorites"
        single-line
      ></v-text-field>
      </template>

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

    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ snackBarText }}
      <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    
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
        searchFavorites: "",
        selected: [],
        headers: [
          { text: " ", align: 'left', value: "Poster", sortable: false, 
         },
          {
            name:"title",
            text: 'Movie title',
            sortable: false,
            value: 'Title',
          },
          { text: 'Year',align: 'start', value: 'Year' }
        ],
        movies:[],
        snackBarText: '',
        snackbar: false,
        timeout: 2000
      }
    },
    mounted(){
      this.movies = this.$store.getters['favMovies/getFavMoviesList']
    },
    methods: {
      removeFromFavs(item) {
        this.snackbar=false
        this.snackBarText="Removed from favorites"
        this.snackbar=true
        this.$store.dispatch('favMovies/removeFromFavorites', item)
      },
      
      redirectToMovie(imdbID){
        this.$router.push("/movies/" + imdbID)
      },
      filterByTitle(value, search, item){
        return item.Title.toLowerCase().includes(search.toLowerCase())
      }
    },

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

table .v-input {
  padding-left:15px;
}
</style>
