<template>
  <div class="container">
    <div class="error">
        <h1 v-if="error.statusCode === 404">This page doesn't exist</h1>
        <h1 v-else>An error occurred</h1>
    </div>
        <div class="error">
            <nuxt-link to="/">
                <button class="my-button"> Go home </button>
            </nuxt-link>
        </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style scoped>
.error{
    margin:100px auto;
    display:flex;
    justify-content: center;
}
h1{
  font-size: 100px;
}
</style>