<template>
  <v-container justify-center align-center>
    <v-row>
      <v-col cols="12" sm="4">
        <nuxt-link :to="'/signup'">
          <v-card hover height="100%" width="100%" :color="navColor" >
            <v-card-title>Sign up</v-card-title>
          </v-card>
        </nuxt-link>
      </v-col>

      <v-col cols="12" sm="4">
        <nuxt-link :to="'/login'">
          <v-card hover height="100%" width="100%" :color="navColor">
            <v-card-title>Login</v-card-title>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data(){
      return {
        navColor: "rgb(162, 232, 228)"
      }
    }
  }
</script>

<style scoped>
</style>
