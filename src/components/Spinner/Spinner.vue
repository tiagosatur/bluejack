<template>
  <div class="bj-loader">Loading...</div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style lang="scss">
@import "@/style/colors";

.bj-loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background: $cPrimary;
  background: linear-gradient(left, $cPrimary 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: spinnerAnimation 1.4s infinite linear;
  transform: translateZ(0);
}
.bj-loader:before {
  width: 50%;
  height: 50%;
  background: $cPrimary;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.bj-loader:after {
  background: #1d232f;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@keyframes spinnerAnimation {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
