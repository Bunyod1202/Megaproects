<template>
  <MainModal />
  <div class="fon" :class="{ show: hover }">
    <div class="tv" v-if="offs">
      <div class="well-come" v-show="wellcome">
        <div class="name">Well come <q-spinner color="white" size="1em" /></div>
      </div>
      <div class="nav">
        <div class="nav-item">
          <div class="nav-link">
            <div class="logo">
              <img src="icons/favicon-32x32.png" alt="" />
              <h4>Bunyod</h4>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-link">
            <div class="phone-number">
              <q-icon class="phone-icon" name="phone" /> +998(90) 099-29-26
            </div>
          </div>
        </div>
      </div>
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
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
    let slide = ref(1);
    let autoplay = ref(true);

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
      slide,
      autoplay,
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
    overflow: hidden;
    transition: 2s linear;
    border-radius: 3px;
    margin-top: 30px;
    margin-left: 50px;
    background-color: #fff;
    max-width: 95vw;
    min-height: 85vh;
    .well-come {
      z-index: 10;
      position: absolute;
      width: 95vw;
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(0, 0, 0);
      .name {
        font-size: 100px;
        color: #fff;
        font-weight: bolder;
      }
    }
    .nav {
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-item {
        .nav-link {
          .logo {
            margin-left: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 50px;
              height: 50px;
            }
            h4 {
              margin-right: 5px;
              font-weight: bolder;
            }
          }
          .phone-number {
            margin-right: 50px;
            font-weight: bold;
            font-size: 20px;
            .phone-icon {
              font-size: 30px;
              animation-name: example;
              animation-duration: 2s;
              animation-iteration-count: infinite;
            }
            @keyframes example {
              0% {
                transform: rotate(0deg);
              }
              50% {
                transform: rotate(50deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }
          }
        }
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
      background-color: rgba(94, 86, 86, 0.753);
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
      .nav {
        height: 200px;
        display: block;

        .nav-item {
          .nav-link {
            .logo {
              margin-left: 5%;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 50px;
                height: 50px;
              }
              h4 {
                margin-right: 5px;
                font-weight: bolder;
              }
            }
            .phone-number {
              margin-right: 50px;
              font-weight: bold;
              font-size: 20px;
              margin-left: 24%;
            }
          }
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
