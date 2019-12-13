<template>
    <div class="search-input">
        <input type="text" v-model="searchText" class="input-style">
        <button @click="onLoadUser"> Search </button> 
    </div>
</template>


<script>
  export default {
    props:{
      searchText: ''
    },
    methods: {
      onLoadUser() {
  
      }
    }
  }
</script>


<style scoped>
@import "~/assets/searchbar.css";
</style>