<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <todolist></todolist>
  </div>
</template>

<script>
import todolist from "./components/todolist.vue";

export default {
  name: "App",
  components: {
    todolist,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.container {
  max-width: 680px;
  margin: 0 auto;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
  text-align: center;
}
</style>
