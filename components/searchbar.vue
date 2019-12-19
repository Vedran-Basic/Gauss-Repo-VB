<template>
  <div class="search-input">
    <input type="text" v-model="searchQuery" class="input-style">
    
    <nuxt-link to="/movies/" >  <button @click="" class="search-button"> Search </button> </nuxt-link>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        searchQuery: ''
      }
    },

    async asyncData({ params, $axios }) {
      let { data } = await $axios.get('http://www.omdbapi.com/?apikey=dd5fbf0a&s=Batman')
      return { data }
    }
  }
</script>


<style scoped>
@import "~/assets/searchbar.css";


</style>
