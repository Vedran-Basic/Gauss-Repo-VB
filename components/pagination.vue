<template>
    <div class="pagination">
        <ul class="top-pages">
            <li>
                <nuxt-link v-if="$route.query.pageNumber !== undefined" :to="{path:'/search', query: { results:this.$route.query.results, pageNumber: undefined} }"> 1 </nuxt-link>
                <span v-else> 1 </span>
            </li>
            <li>
              <nuxt-link v-if="$route.query.pageNumber === undefined" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber:2 } }"> 2 <!--{{ num }}-->  </nuxt-link>
            </li>
            <li>
              <nuxt-link v-if="$route.query.pageNumber > 2" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber:this.$route.query.pageNumber-1 } }"> {{ this.$route.query.pageNumber - 1}} <!--{{ num }}-->  </nuxt-link>
            </li>
            <li>
              <span v-if="$route.query.pageNumber !== lastPage && $route.query.pageNumber >1"> {{this.$route.query.pageNumber}}  </span>
            </li>


            <li>
              <nuxt-link v-if="$route.query.pageNumber > 1 && $route.query.pageNumber < lastPage-1" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber:this.$route.query.pageNumber+1 } }"> {{ this.$route.query.pageNumber + 1}} <!--{{ num }}-->  </nuxt-link>
            </li>
            
            
            <li>
              <nuxt-link v-if="$route.query.pageNumber === undefined || $route.query.pageNumber !== lastPage" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber: lastPage } }">  {{ lastPage }}  </nuxt-link>
              <span v-else> {{ lastPage }} </span>
            </li>

            
            <li> <button  class="search-button" @click="onSearch"> searchov Console.log </button> </li>
        </ul>
    </div>  
</template>

<script>
  export default {
    methods:{
      onSearch(){
         console.log(($route.query.pageNumber))
      }
    },
    computed:{
      lastPage(){
      return Math.ceil(parseFloat(this.total)/10)
      }
    },

    props: ['total']  //u _search/index.vue u komponentu dodajemo       <pagination :total="data.totalResults"/>
  }
</script>
<style scoped>
.pagination{
float:right;
}
.top-pages{
  display:inline;
  list-style:none;
  
}
.search-button{
  display: inline;
}
</style>