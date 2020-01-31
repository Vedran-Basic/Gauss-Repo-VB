<template>
    <div class="pagination">
        <ul class="top-pages">
          <nuxt-link v-if="$route.query.pageNumber !== undefined" :to="{path:'/search', query: { results:this.$route.query.results, pageNumber: undefined} }"> 
            <li class="inactive">1</li>
          </nuxt-link>
          <li v-else class="current-page"> 1 </li> 

          <nuxt-link  v-if="$route.query.pageNumber === undefined" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber:2 } }">
            <li class="inactive"> 2 </li>
          </nuxt-link>
          <li v-if="$route.query.pageNumber > 3"> ... </li>
          <nuxt-link v-if="$route.query.pageNumber > 2" :to="{path: '/search', query: { results:this.$route.query.results, pageNumber:this.$route.query.pageNumber-1 }}"> 
              <li class="inactive">{{ this.$route.query.pageNumber - 1}}   </li>
          </nuxt-link>

          <li class="current-page" v-if="$route.query.pageNumber !== lastPage && $route.query.pageNumber >1">{{this.$route.query.pageNumber}}</li>

          <nuxt-link v-if="$route.query.pageNumber > 1 && $route.query.pageNumber < lastPage-1" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber:Number(this.$route.query.pageNumber)+1 } }"> 
            <li class="inactive"> {{ Number(this.$route.query.pageNumber) + 1}} </li>
          </nuxt-link>

          <li v-if="$route.query.pageNumber < lastPage - 2 || $route.query.pageNumber === undefined "> ... </li>
          <nuxt-link v-if="$route.query.pageNumber === undefined || $route.query.pageNumber !== lastPage" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber: lastPage } }"> 
            <li class="inactive">  {{ lastPage }} </li>
          </nuxt-link>
          <li v-else class="current-page"> {{ lastPage }} </li>
          
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
@import "~/assets/pagination.css";
</style>