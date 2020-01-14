<template>
    <div class="pagination">
        <ul>
            <li>
                <nuxt-link v-if="$route.query.pageNumber === undefined" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber: 2 } }"> 2 <!--{{ num }}-->  </nuxt-link>
                <nuxt-link v-else :to="{path:'/search', query: { results:this.$route.query.results, pageNumber: 1} }"> 1 </nuxt-link>
            </li>
            
            <li> <button  class="search-button" @click="onSearch"> Display queries </button> </li>
        </ul>
    </div>  
</template>

<script>
  export default {
    methods:{
      onSearch(){
         console.log(this.$route.query.results, this.$route.query.pageNumber)
      }
    }
  }
</script>