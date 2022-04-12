<template>
  <div class="erorr">
    <h1>
      <i>E</i>
      <i>R</i>
      <i>R</i>
      <i>O</i>
      <i>R</i>
    </h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404",
});
</script>
<style lang="scss" scoped>
.erorr {
  background-color: #000;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    padding: 0;
    color: #111;
    font-size: 16em;
    i {
      display: table-cell;
      margin: 0;
      padding: 0;
      animation: animate 5s linear infinite;
      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.25s;
      }
      &:nth-child(3) {
        animation-delay: 0.5s;
      }
      &:nth-child(4) {
        animation-delay: 0.75s;
      }
      &:nth-child(5) {
        animation-delay: 1s;
      }
    }
    @keyframes animate {
      0%,
      100% {
        color: #fff;
        filter: blur(2px);
        text-shadow: 0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 80px red,
          0 0 120px red, 0 0 200px red, 0 0 300px red, 0 0 400px red;
      }
      5%,
      95% {
        color: #111;
        filter: blur(0px);
        text-shadow: none;
      }
    }
  }
}
</style>
