<template>
  <div id="app">
    <header
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 class="font-weight-normal display-4 m-0">
        CARDS
      </h1>
    </header>
    <b-container class="bv-example-row">
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

$secondary: #1d232f !default;
$primary: #ffeb3b !default;
$body-bg: #1d232f;

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
::selection {
  background: $primary;
  color: $secondary;
}
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
</style>
