<template>
  <div>
    <h1>
      Users view
    </h1>
    <p>
      <a href="..">Home</a> <!-- Je li href za root page ..? -->
    </p>
    <br />
    <input type="text" v-model="userID">
    <button @click="onLoadUser"> Load User</button>
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
