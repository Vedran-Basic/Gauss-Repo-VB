<template>
  <header>
    <nav>
      <ul>
        <li> <a href=".."> Home </a></li>
        <li> <a href="/movies"> Movies </a> </li>
        <li> <a href="/about"> About </a></li>

      </ul>
    </nav>
  </header>
</template>

<style>
  nav {
    background-color: cyan;
    width: 100%;
    overflow: hidden;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    float: left;
  }

  nav a {
    margin: 20px;
    width: 150px;
    display: block;
    text-decoration: none;
    text-align: center;
    background-color: royalblue;
    font-size: 20px;
    color: white;
    padding: 20px 10px;
  }
</style>
