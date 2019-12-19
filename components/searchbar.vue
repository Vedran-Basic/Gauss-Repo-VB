<template>
  <div class="search-input">
    <input type="text" v-model="searchQuery" class="input-style">
    
    <button  class="search-button"> Search </button>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        searchQuery: ''
      }
    },

  }
</script>


<style scoped>
@import "~/assets/searchbar.css";


</style>
