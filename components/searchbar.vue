<template>
  <div class="search-container">
    <div class="text-field">
     <v-text-field
        v-model="searchQuery"
        background-color="rgb(255,255,255)"
        rounded outlined
        color="white"
        label="Search"
        autocomplete
        @keyup.enter="onSearch()"
      >
      </v-text-field>
      <v-btn class="search-magnifier" icon @click="onSearch()" >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>


  </div>
</template>


<script>
  import debounce from 'lodash/debounce'
  export default {
    data() {
      return {
        searchQuery: '',
      }
    },
    methods:{
      onSearch(){
        this.$router.push({path:'/search', query:{results: this.searchQuery}} )
        this.searchQuery=''
      }
    }
  }
</script>


<style scoped>
@import "~/assets/searchbar.css";


</style>
