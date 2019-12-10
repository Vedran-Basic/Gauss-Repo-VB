<head>
  <meta charset="utf-8">
</head>

<template>
  <div class="container">
    <div>
      <p class="long-text">
        Poštovanje!

        Zovem se Vedran Bašić i 21 mi je godina. Volim gledati u budućnost, podsjećam se vraćajući se u prošlost, a koncentriram se na sadašnjost.
      </p>
    </div>
  </div>
</template>

<style>
  .about{
  align-content:center;
  }

  .long-text {
    font-family: 'Times New Roman';
    font-size: 30px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    padding-left:30px;
  }

</style>


<script>
  export default {
    methods: {
      onLoadUser() {
        this.$router.push('/users/' + this.userID)
      }
    },
    layout: 'NavBar'
  }

</script>
