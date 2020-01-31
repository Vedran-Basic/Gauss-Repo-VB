<template>
  <div class="search-input">
    <input type="text" v-model="searchQuery" class="input-style"  @keyup.enter="onSearch">
    
    <button  class="search-button" @click="onSearch()"  > Search </button>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        searchQuery: '',
      }
    },
    methods:{
      onSearch(){
        this.$router.push({path:'/search', query:{results: this.searchQuery}} )
      }
    }
  }
</script>


<style scoped>
@import "~/assets/searchbar.css";


</style>
