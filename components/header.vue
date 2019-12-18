<template>
  <header>
    <div class="navbar-container">
      <nav>
        <div class="topnav">
          <div class="navbar-item"> <a href=".."> Home </a></div>
          <div class="navbar-item"> <a href="/movies"> Movies </a> </div>
          <div class="navbar-item"> <a href="/about"> About </a></div>
        </div>
      </nav>
      <searchbar searchText="" :search-content="searchContent" />
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


