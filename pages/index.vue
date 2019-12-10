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
    </div>
  </div>
</template>

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
