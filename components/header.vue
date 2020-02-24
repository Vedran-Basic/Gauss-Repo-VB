<template>
  <header>
    <div class="navbar-container">
      <nav>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <nuxt-link :to="'/'">
                <v-card hover height="100%" width="100%" :color="navColor" >  
                  <v-card-title>Home</v-card-title>
                </v-card>
              </nuxt-link>
            </v-col>
            
            <v-col cols="12" sm="4">
              <nuxt-link :to="'/favorites'">
                <v-card hover height="100%" width="100%" :color="navColor">
                  <v-card-title>Favorites</v-card-title>  
                </v-card>
              </nuxt-link>
            </v-col>
            
            <v-col cols="12" sm="4" >
              <nuxt-link :to="'/about'">
                <v-card hover height="100%" width="100%" :color="navColor">
                  <v-card-title >About</v-card-title>
                </v-card>
              </nuxt-link>
            </v-col>
            <UserNav/>
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
.img-whitener{
  background-color: rgb(255,255,255)
}

</style>

<script>
  import searchbar from "~/components/searchbar";
  import UserNav from "~/components/userNav";
  export default {
    data(){
      return{
        navColor: "rgb(162, 232, 228)"
      }
    },
    components: {
      searchbar, UserNav
    },
    props: {
      searchContent: String,
      required: false
    }
  }
</script>
