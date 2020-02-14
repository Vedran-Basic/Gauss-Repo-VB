<template>
  <v-app style="background: none">
    <Header />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
  import Header from '~/components/header.vue'
  import Footer from '~/components/footer.vue'
  export default {
    components: {
      Header, Footer
    }
  }
</script>
