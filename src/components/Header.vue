<template>
  <header class="d-flex flex-column justify-content-center align-items-center">
    <h1 class="font-weight-normal display-4 mb-5">
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>
