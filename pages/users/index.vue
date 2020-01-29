<template>
  <div class=container>
    <div id="LoadUserButton">
      <h2> Enter a username</h2>
      <form >
        <input type="text" v-model="inputText">
        <button @click="logConsole"> Console Log</button>
      </form>
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
    methods: {
      logConsole() {
        
      }
    },
    components: {
      pagination
    }
  }


</script>
