<template>
  <div>
    <div id="LoadUserButton">
      Enter a text:
      <input type="text" v-model="inputText">
      <button @click="logConsole"> Console Log</button>
      <span v-if="this.Response==='False'"> {{this.Error}} </span>
      <nuxt-child />
      <br>
    </div>
  </div>
</template>


<script>
  import pagination from '~/components/pagination'
  export default {
    data() {
      return {
        inputText: ''
      }
    },
    async asyncData({$axios}){
      let response = await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&s=batman&page=30&type=movie`)
      return response.data
    },
    methods: {
      logConsole() {
        console.log(this) //data se nalazi u vue instanci a ona se pristupa kao u sljedecoj liniji
        console.log(Math.ceil(this.totalResults/10))
        console.log(this.totalResults)
        console.log(this.totalResults/10)
        console.log(this.Search)
        console.log(this.Response)
        console.log(parseFloat(this.totalResults))
        
      }
    },
    components: {
      pagination
    }
  }


</script>
