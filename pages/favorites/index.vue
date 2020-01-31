<template>
  <div class=container>
    <div id="LoadUserButton">
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
