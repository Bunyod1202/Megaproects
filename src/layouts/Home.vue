<template>
  <MainModal />
  <div class="fon" :class="{ show: hover }">
    <div class="tv" v-if="off">
      <Carusel />
    </div>
    <div class="tv-off" v-else></div>
    <div class="buttoms">
      <div class="logo">
        <img src="icons/asus.png" alt="" />
      </div>
      <div class="btn-group">
        <q-btn class="btn" rounded color="white" text-color="black">Menu</q-btn>
        <q-btn
          class="btn"
          :disabled="disabled"
          rounded
          color="white"
          text-color="black"
          @click="btnClickLight"
        >
          <q-icon name="light_mode"></q-icon>
        </q-btn>
        <q-btn class="btn" rounded color="white" text-color="black">
          <q-icon name="style" />
        </q-btn>
        <q-btn class="btn" rounded color="white" text-color="black">Auto</q-btn>
        <q-btn
          class="btn glossy"
          round
          color="white"
          @click="off = !off"
          text-color="black"
          ><q-icon name="power_settings_new"
        /></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Carusel from "src/layouts/Carusel";
import MainModal from "src/components/modal/MainModal";
export default defineComponent({
  name: "MainLayout",

  components: {
    MainModal,
  },

  setup() {
    let off = ref(true);
    let hover = ref(false);
    let disabled = ref(false);

    function btnClickLight() {
      hover.value = !hover.value;
      disabled.value = true;
      setTimeout(() => {
        disabled.value = false;
      }, 2000);
    }
    return {
      off,
      hover,
      btnClickLight,
      disabled,
    };
  },
});
</script>
<style lang="scss" scoped>
.fon {
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgb(83, 81, 81);
  width: 100vw;
  height: 100vh;
  position: fixed;

  &.show {
    background-color: rgb(26, 22, 22) !important;
  }
  .tv {
    border-radius: 3px;
    margin-top: 30px;
    margin-left: 50px;
    background-color: #fff;
    width: 95vw;
    height: 87vh;
  }
  .tv-off {
    z-index: 10000;
    border-radius: 3px;
    margin-top: 30px;
    margin-left: 50px;
    background-color: black;
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
