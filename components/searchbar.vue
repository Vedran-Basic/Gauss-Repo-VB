<template>
    <div class="search-input">
        <input type="text" v-model="searchContent" class="input-style">
        <button @click="onClickSearch" class="search-button"> Search </button> 
    </div>
</template>


<script>
  export default {
    props:{
      searchContent: ''
    },
    methods: {
      onClickSearch() {
        
      }
    }
  }
</script>


<style scoped>
@import "~/assets/searchbar.css";


</style>
