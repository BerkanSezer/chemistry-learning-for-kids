<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view style="width=100%"></router-view>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      // HelloWorld
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1 {
    color: white;
    margin-top: 20px;
  }

  .btn {
    &__black {
      width: 100px;
      height: 50px;
      border-radius: 5px;
      background-color: black;
      color: white;
      font-size: 20px;
      border: 1px solid white;

      &:hover {
        background-color: #484848;
        color: white;
      }
    }
  }
</style>