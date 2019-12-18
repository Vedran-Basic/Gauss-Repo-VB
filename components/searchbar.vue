<template>
    <div class="search-input">
        <input type="text" v-model="searchQuery" class="input-style">
        <button @click="onClickSearch" class="search-button"> Search </button> 
    </div>
</template>


<script>
  export default {
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
      onClickSearch(){
        console.log(this.searchQuery)
      }
    },
  }
    // onClickSearch:{
    //   async asyncData({ params, $axios }) {
    //     let { data } = await $axios.get('http://www.omdbapi.com/?apikey=dd5fbf0a&s=' + 'Batman' + '}')
    //     return { data }
    // }

    // }

</script>


<style scoped>
@import "~/assets/searchbar.css";


</style>
