<template>
  <header>
    <div class="navbar-container">
      <nav>
        <div class="topnav">
          <div class="navbar-item"> <nuxt-link :to="'/'"> Home </nuxt-link> </div>
          <div class="navbar-item"> <nuxt-link :to="'/favorites'"> Favorites </nuxt-link> </div>
          <div class="navbar-item"> <nuxt-link :to="'about'"> About </nuxt-link> </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import "~/assets/header.css";
@import "~/assets/searchbar.css";


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