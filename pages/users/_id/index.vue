<template>
  <div class="ThePage">
    <div class="Headline">
      <h1>
        A single user with ID: {{ $route.params.id }}
      </h1>
    </div>
    <div class="Link">
      <a href="..">
        Go back
      </a>
    </div>
    <div>

    </div>
  </div>

    
</template>


<style>
  .ThePage {
    outline: solid 1px red;
    margin-left: 5%; /* Što je preporučeno, upotrebljavati postotke, px ili nešto drugo? */
    margin-right: 5%;
    margin-top:70px;
    margin-bottom:0 auto;
    min-height:200vh;
    
  }
  .Headline {
    outline: solid 1px black;
    margin-left: 50px;
    margin-right:50px;
    margin-top:50px; 
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30vh;
  }
</style>
