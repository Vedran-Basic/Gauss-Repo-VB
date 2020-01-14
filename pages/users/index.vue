<template>
  <div>
    <div id="LoadUserButton">
      Enter a text:
      <input type="text" v-model="inputText">
      <button @click="logConsole"> Console Log</button>
      <nuxt-child />
<br>
        <pagination />

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
      let response = await $axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&s=batman&page=1&type=movie`)
      return response.data
    },
    methods: {
      logConsole() {
        console.log(data)
      }
    },
    components: {
      pagination
    }
  }


</script>
