<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "App"
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: none;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  background: #f1f4f8;
}
body {
  background: #f1f4f8;
}
</style>
