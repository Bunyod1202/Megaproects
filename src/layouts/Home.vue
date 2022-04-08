<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <div class="fon">
    <div class="tv"></div>
    <div class="buttoms">
      <div class="logo">
        <img src="icons/asus.png" alt="" />
      </div>
      <div class="btn-group">
        <q-btn class="btn" rounded color="white" text-color="black">Menu</q-btn>
        <q-btn class="btn" rounded color="white" text-color="black">
          <q-icon name="light_mode"></q-icon>
        </q-btn>
        <q-btn class="btn" rounded color="white" text-color="black">
          <q-icon name="sports_esports" />
        </q-btn>
        <q-btn class="btn" rounded color="white" text-color="black">Auto</q-btn>
        <q-btn class="btn glossy" round color="white" text-color="black"
          ><q-icon name="power_settings_new"
        /></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.fon {
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgb(52, 49, 49);
  width: 100vw;
  height: 100vh;
  position: fixed;
  .tv {
    border-radius: 3px;
    margin-top: 30px;
    margin-left: 50px;
    background-color: #fff;
    width: 95vw;
    height: 87vh;
  }
  .buttoms {
    display: flex;
    .logo {
      margin-left: 48%;
      margin-top: 20px;
      img {
        width: 80px;
      }
    }
    .btn-group {
      margin-left: 25%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        margin-left: 15px;
      }
    }
  }
}
</style>
