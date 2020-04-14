<template>
  <div id="app">
    <b-container class="bv-example-row">
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import "./style/all";
</style>
