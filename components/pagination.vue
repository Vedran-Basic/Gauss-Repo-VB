<template>
    <div class="pagination">       
      <v-pagination
        v-model="currentPage"
        :length="lastPage"
        :total-visible="7"
        @input="next"
      ></v-pagination>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        currentPage: Number(this.$route.query.pageNumber)
      }
    },
    methods:{
      next (page) {
        if(page===1){
          this.$router.push({path:'/search', query:{results: this.$route.query.results}} )
        }
        else{
          this.$router.push({path:'/search', query:{results: this.$route.query.results, pageNumber: page}} )
          }
      }
    },
    computed:{
      lastPage(){
      return Math.ceil(parseFloat(this.total)/10)
      }
    },
    mounted(){
      if(this.$route.query.pageNumber===undefined){      
        this.currentPage= 1
      }
    },
    props: ['total']  //u _search/index.vue u komponentu dodajemo       <pagination :total="data.totalResults"/>
  }
</script>

<style scoped>
</style>