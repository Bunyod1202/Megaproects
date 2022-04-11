<template>
  <MainModal />
  <div class="fon" :class="{ show: hover }">
    <div class="tv" v-if="offs">
      <div class="well-come" v-show="wellcome">
        <div class="name">Well come <q-spinner color="white" size="1em" /></div>
      </div>
      <Carusel />
    </div>
    <div class="tv-off" v-else>
      <div class="well-come" v-show="wellcome">
        <div class="name">Off<q-spinner color="white" size="1em" /></div>
      </div>
    </div>
    <div class="buttoms">
      <div class="nul"></div>
      <div class="logo">
        <img src="icons/asus.png" alt="" />
      </div>
      <div class="btn-group">
        <q-btn
          class="btn"
          :disabled="disabled"
          rounded
          color="white"
          text-color="black"
          >Menu</q-btn
        >
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
        <q-btn
          class="btn"
          :disabled="disabled"
          rounded
          color="white"
          text-color="black"
        >
          <q-icon name="style" />
        </q-btn>
        <q-btn
          class="btn"
          :disabled="disabled"
          rounded
          color="white"
          text-color="black"
          >Auto</q-btn
        >
        <q-btn
          class="btn glossy"
          round
          color="white"
          @click="off"
          text-color="black"
          :disabled="disable"
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
  components: {
    MainModal,
  },

  setup() {
    let offs = ref(false);
    let hover = ref(false);
    let wellcome = ref(false);
    let disabled = ref(true);
    let disable = ref(false);

    function btnClickLight() {
      hover.value = !hover.value;
      disabled.value = true;
      disable.value = true;
      setTimeout(() => {
        disabled.value = false;
        disable.value = false;
      }, 1000);
    }
    function off() {
      disabled.value = !disabled.value;
      offs.value = !offs.value;
      wellcome.value = true;
      disable.value = true;
      setTimeout(() => {
        disable.value = false;
        wellcome.value = false;
      }, 3000);
    }
    return {
      offs,
      hover,
      btnClickLight,
      disabled,
      disable,
      off,
      wellcome,
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
    transition: 2s linear;
    border-radius: 3px;
    margin-top: 30px;
    margin-left: 50px;
    background-color: #fff;
    max-width: 95vw;
    min-height: 85vh;
    .well-come {
      max-width: 95vw;
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.753);
      .name {
        font-size: 100px;
        color: #000;
        font-weight: bolder;
      }
    }
  }
  .tv-off {
    transition: 2s linear;
    z-index: 10000;
    border-radius: 3px;
    margin-top: 30px;
    margin-left: 50px;
    background-color: black;
    max-width: 95vw;
    min-height: 85vh;
    .well-come {
      max-width: 95vw;
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(94, 86, 86, 0.451);
      .name {
        font-size: 100px;
        color: #fff;
        font-weight: bolder;
      }
    }
  }
  .buttoms {
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    .logo {
      margin-top: 20px;
      img {
        width: 80px;
      }
    }
    .btn-group {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      .btn {
        margin-left: 15px;
      }
    }
    .nul {
      width: 350px;
    }
  }
}
@media (max-width: 500px) {
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
      width: 95vw;
      min-height: 65vh;
      margin-left: 10px;
      margin-top: 10px;
      .well-come {
        width: 95vw;
        min-height: 65vh;
        background-color: rgba(72, 110, 180, 0.753);
        .name {
          font-size: 50px;
          color: #fff;
          font-weight: bolder;
        }
      }
    }
    .tv-off {
      width: 95vw;
      min-height: 65vh;
      margin-left: 10px;
      margin-top: 10px;
      .well-come {
        width: 95vw;
        min-height: 65vh;
        background-color: rgba(72, 180, 106, 0.753);
        .name {
          font-size: 50px;
          color: #fff;
          font-weight: bolder;
        }
      }
    }
    .buttoms {
      display: block;
      .logo {
        margin-left: 40%;
      }
    }
  }
}
</style>
