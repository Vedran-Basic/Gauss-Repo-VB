<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12">
          <v-hover v-slot:default="{ hover }" >
            <v-card height="435" width="300" :class="{ 'on-hover': hover }" dark>
              <nuxt-link :to="'/movies/' + movies.imdbID" @click="storeMovie(movie)" >
                <v-img v-if="Poster==='N/A'"
                       class="black--text align-center"
                       src="undefinedPic.jpg"
                       height="300"
                       width="300"
                       contain>
                </v-img>
                <v-img v-if="Poster!=='N/A'"
                       class="black--text align-center"
                       :src="Poster"
                       height="300"
                       width="300"
                       contain>
                </v-img>

                <div class="card-text">
                  <h3> {{ Title }} ({{ Year }}) </h3>
                </div>
              </nuxt-link>
              <v-btn v-if="isInFavorites"
                     @click="addToFavs"
                     color="orange"
                     text
                     absolute
                     bottom
                     right>
                Add to favorites
              </v-btn>
              <v-btn v-if="!isInFavorites"
                     @click="removeFromFavs"
                     color="orange"
                     text
                     absolute
                     bottom
                     right>
                Remove from Favorites
              </v-btn>
              <v-snackbar v-model="snackbar" :timeout="timeout">
                  {{ snackBarText }}
                  <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
              </v-snackbar>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'MoviePreview',
    data() {
      return {
        Poster: this.movies.Poster,
        Title: this.movies.Title,
        Year: this.movies.Year,
        snackBarText: '',
        snackbar: false,
        timeout: 2000
      }
    },
    props: {
      movies : Object
      },
      methods:{
        ...mapActions('favMovies',[
          'storeMovie'
          ]),
        addToFavs() {
            this.snackbar=false
            this.snackBarText="Added to favorites"
            this.snackbar=true
            this.$emit('addToFavs', this.movies)
          },
          removeFromFavs(){
            this.snackbar=false
            this.snackBarText="Removed from favorites"
            this.snackbar=true
            this.$emit('removeFromFavs', this.movies)
          }
      },
      computed:{
        isInFavorites(){
          let isIt= false
          let favorites = this.$store.getters['favMovies/getFavMoviesList']
          favorites.forEach((item)=>{
            if(item.imdbID===this.movies.imdbID){
              isIt=true
            }
          })
            return !isIt  
      }

      }
}
  

</script>

<style scoped>


  a {
    text-decoration: none;
    color: white;
  }

  .v-card {
    transition: background-color .2s ease-in-out;
  }

  .v-card:not(.on-hover) {
    background-color:rgb(41, 37, 37);
  }


</style>
