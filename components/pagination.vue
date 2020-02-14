<template>
    <div class="pagination">
      <v-pagination
        v-model="currentPage"
        :length="pages"
        :pages-visible="visible"
        @input="next"
      ></v-pagination>
      
    </div>
</template>

<script>
  export default {
    data(){
      return{
        currentPage: Number(this.$route.query.pageNumber),
        visible:7
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
    mounted(){
      if(this.$route.query.pageNumber===undefined){      
        this.currentPage= 1
      }
    },
    updated(){
      if(this.$route.query.pageNumber==='flag'){

      }
    },
    props: {
      totalPages:{
        type: Number,
        required:true,
      }
    }  //u _search/index.vue u komponentu dodajemo       <pagination :pages="data.pagesResults"/>
  }
</script>

<style scoped>
</style>
