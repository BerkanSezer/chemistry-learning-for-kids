<template>
  <div id="app">
    <router-view style="width=100%"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
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
    color: white;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    .container {
      >header {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        .info{
          background-color: #007bff;
          padding: 10px;
          border-radius: 4px;
          font-size: 17px;
        }
      }
    }
  }

  h1 {
    color: white;
    margin-top: 20px;
    width: 100%;
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