<template>
  <header class="d-flex flex-column justify-content-center align-items-center">
    <h1 class="test-id-title font-weight-normal display-4 mb-5 text-primary">
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
