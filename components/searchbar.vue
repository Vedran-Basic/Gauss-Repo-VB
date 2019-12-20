<template>
  <div class="search-input">
    <input type="text" v-model="searchQuery" class="input-style">
    
    <button  class="search-button" @click="onSearch"> Search </button>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        searchQuery: ''
      }
    },
    methods:{
      onSearch(){
        this.$router.push('/' + this.searchQuery)
      }
    }
  }
</script>


<style scoped>
@import "~/assets/searchbar.css";


</style>
