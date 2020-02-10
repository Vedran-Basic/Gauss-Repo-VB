<template>
  <header>
    <div class="navbar-container">
      <nav>
      <v-container >
        <v-row>
          <v-col cols="12" sm="2">
            <nuxt-link :to="'/'">

              <v-card elevation="4" height="50" width="400px">  
                <v-card-text>
                  Home  
                </v-card-text>
              </v-card>
            </nuxt-link>
          </v-col>
        
          <v-col cols="12" sm="2">
            <nuxt-link :to="'/favorites'">
              <v-card elevation="4" height="50" width="200">  
              <v-card-text>
                Favorites  
              </v-card-text>  
              </v-card>
            </nuxt-link>
          </v-col>
        
          <v-col cols="12" sm="2" height="50" width="200">
            <nuxt-link :to="'about'">
              <v-card elevation="4">
                <v-card-text>
                  Home  
                </v-card-text>
              </v-card>
            </nuxt-link>
          </v-col>
        
        </v-row>
      </v-container>
      
        
      </nav>
      <searchbar searchText="" :search-content="searchContent" />
    </div>
  </header>
</template>

<style scoped>
@import "~/assets/header.css";
@import "~/assets/searchbar.css";
.v-container{
  display:flex;
  justify-content: center;
}

</style>

<script>
  import searchbar from "~/components/searchbar";

  export default {
    components: {
      searchbar
    },
    props: {
      searchContent: String,
      required: false
    }
  }
</script>