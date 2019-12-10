<template>
  <div>
    <div id="LoadUserButton">
      Enter a username:
      <input type="text" v-model="userID">
      <button @click="onLoadUser"> Load User</button>
      <nuxt-child />
    </div>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        userID: ''
      }
    },
    methods: {
      onLoadUser() {
        this.$router.push('/users/' + this.userID)
      }
    }
  }

</script>
