<template>
  <div class="d-flex justify-content-center pt-5">
    <router-link to="/deck/new">
      <b-button variant="primary" class="btn-lg mt-10"
        >Start a new deck</b-button
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style>
.mt-10 {
  margin-top: 10rem;
}
</style>
