<template>
  <div class="container">
    <div>
      <div class="HomePageLinks">
        <a href="/users"
           class="button--green">
          Users page
        </a>
      </div>
      <nuxt-link to="/users">Users - Single Page App</nuxt-link>

      <p>
        {{ data.Search[0].Title }}
      </p>


    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $axios }) {
      const { data } = await $axios.get('http://www.omdbapi.com/?apikey=dd5fbf0a&s=Batman}')
      console.log(data);
      
      return {data}
    },
    created(){
      console.log(this.data);
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .HomePageLinks {
    padding-top: 15px;
    padding-bottom: 15px
  }
</style>
