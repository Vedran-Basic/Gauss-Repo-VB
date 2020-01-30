<template>
    <div class="pagination">
        <ul class="top-pages">

          <nuxt-link v-if="$route.query.pageNumber !== undefined" :to="{path:'/search', query: { results:this.$route.query.results, pageNumber: undefined} }"> 
            <li>1</li>
          </nuxt-link>
          <li v-else class="current-page"> 1 </li> 

          <nuxt-link  v-if="$route.query.pageNumber === undefined" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber:2 } }">
            <li> 2 </li>
          </nuxt-link>

          <nuxt-link v-if="$route.query.pageNumber > 2" :to="{path: '/search', query: { results:this.$route.query.results, pageNumber:this.$route.query.pageNumber-1 }}"> 
              <li>{{ this.$route.query.pageNumber - 1}}   </li>
          </nuxt-link>

          <li class="current-page" v-if="$route.query.pageNumber !== lastPage && $route.query.pageNumber >1">{{this.$route.query.pageNumber}}</li>

          <nuxt-link v-if="$route.query.pageNumber > 1 && $route.query.pageNumber < lastPage-1" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber:this.$route.query.pageNumber+1 } }"> 
            <li> {{ this.$route.query.pageNumber + 1}} </li>
          </nuxt-link>

          <nuxt-link v-if="$route.query.pageNumber === undefined || $route.query.pageNumber !== lastPage" :to="{ path: '/search', query: { results:this.$route.query.results, pageNumber: lastPage } }"> 
            <li>  {{ lastPage }} </li>
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

.top-pages{
  display:inline;
  list-style:none;
  
}
.search-button{
  display: inline;
}


.pagination {
  display: inline-block;
}

.pagination li{
  color: black;
  float: left;
  padding: 20px 16px;
  text-decoration: none;
  margin:3px;
  font-size: 50px;
  background-color:;
}

  li:hover ,
  li:active{
    background-color: grey;
    cursor:pointer;
  }

  li{
      background-color:slategrey;
  }
  .current-page{
    background-color: rgb(66,66,66);
  }
</style>