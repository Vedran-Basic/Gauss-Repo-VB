<template>
  <div class="ThePage">
    <h1>
      A single user with ID: {{ $route.params.id }}
    </h1>
    
    <a href="..">
      <div class="Link">

        Go back

      </div>
    </a>
    <div class="Footer">

    </div>
  </div>

    
</template>

<style>
  .ThePage {
    outline: solid 1px red;
    margin: 50px auto;
    min-height:150vh;
    max-width:2500px;
    overflow: auto;

    
  }
  .Link {
    box-sizing:border-box;
    height:100px;
    width:300px;
    padding:5px;
    outline: solid 1px grey;
    margin: 100px auto;
    justify-content: center;
    text-align:center;
    font: bold 30px arial
  }
  .Link:hover{
    background-color: lightslategrey;

  }
</style>
