<template>
  <div>
    <q-dialog class="dialog" v-model="confirm" persistent>
      <div class="blok-right"></div>
      <div class="blok-bottom"></div>
      <div class="blok-left"></div>
      <div class="blok-one"></div>
      <div class="blok-top"></div>
      <q-card class="card-login">
        <LoginModal v-if="ini" />
        <RegisterModal v-else />
        <q-card-actions class="register-btn">
          <q-btn
            v-if="ini"
            flat
            class="btn"
            label="Регистрация"
            @click="ini = !ini"
          />
          <q-btn
            v-else
            flat
            class="btn"
            label="Авторизация"
            @click="ini = !ini"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import LoginModal from "src/components/modal/LoginModal";
import RegisterModal from "src/components/modal/RegisterModal";
export default defineComponent({
  components: {
    LoginModal,
    RegisterModal,
  },
  setup() {
    const confirm = ref(true);
    let ini = ref(true);
    return {
      confirm,
      ini,
    };
  },
});
</script>
<style lang="scss" scoped>
.dialog {
  .card-login {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    width: 500px;
    min-height: 200px;
    padding: 20px;
    .register-btn {
      border-top: 1px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        color: white;
        margin-top: 10px;
        border-radius: 8px;
        width: 150px;
        height: 30px;
      }
    }
  }
  .blok-right,
  .blok-bottom,
  .blok-left,
  .blok-top,
  .blok-one {
    position: absolute;
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    transition: 2s linear;
  }

  .blok-right {
    z-index: 1px;
    top: 190px;
    right: 650px;
    width: 100px;
    height: 100px;
    animation-name: card;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
  .blok-bottom {
    z-index: 2;
    top: 430px;
    left: 595px;
    width: 130px;
    height: 130px;
    animation-name: card1;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
  .blok-left {
    z-index: 2;
    top: 530px;
    right: 650px;
    width: 80px;
    height: 80px;
    animation-name: card2;
    animation-duration: 6s;
    animation-iteration-count: infinite;
  }
  .blok-top {
    z-index: 2;
    bottom: 150px;
    left: 800px;
    width: 40px;
    height: 40px;
    animation-name: card3;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  .blok-one {
    z-index: 2;
    top: 100px;
    left: 850px;
    width: 60px;
    height: 60px;
    animation-name: card4;
    animation-duration: 7s;
    animation-iteration-count: infinite;
  }
}
@keyframes card {
  0% {
    transform: scale(1);
    transition: 3s linear;
  }
  50% {
    transition: 3s linear;
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    transition: 3s linear;
  }
}
@keyframes card1 {
  0% {
    transform: scale(1);
    transition: 4s linear;
  }
  50% {
    transition: 4s linear;
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    transition: 4s linear;
  }
}
@keyframes card2 {
  0% {
    transform: scale(1);
    transition: 4s linear;
  }
  50% {
    transition: 4s linear;
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    transition: 4s linear;
  }
}
@keyframes card3 {
  0% {
    transform: scale(1);
    transition: 4s linear;
  }
  50% {
    transition: 4s linear;
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    transition: 4s linear;
  }
}
@keyframes card4 {
  0% {
    transform: scale(1);
    transition: 4s linear;
  }
  50% {
    transition: 4s linear;
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    transition: 4s linear;
  }
}
@media (max-width: 1700px) {
  .dialog {
    .card-login {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      position: relative;
      width: 500px;
      min-height: 200px;
      padding: 20px;
      .register-btn {
        border-top: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn {
          color: white;
          margin-top: 10px;
          border-radius: 8px;
          width: 150px;
          height: 30px;
        }
      }
    }
    .blok-right,
    .blok-bottom,
    .blok-left,
    .blok-top,
    .blok-one {
      position: absolute;
      backdrop-filter: blur(5px);
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    }

    .blok-right {
      z-index: 1px;
      top: 70px;
      right: 450px;
      width: 100px;
      height: 100px;
    }
    .blok-bottom {
      z-index: 2;
      top: 350px;
      left: 400px;
      width: 130px;
      height: 130px;
    }
    .blok-left {
      z-index: 2;
      top: 450px;
      right: 450px;
      width: 80px;
      height: 80px;
    }
    .blok-top {
      z-index: 2;
      bottom: 50px;
      left: 650px;
      width: 40px;
      height: 40px;
    }
    .blok-one {
      z-index: 2;
      top: 20px;
      left: 700px;
      width: 60px;
      height: 60px;
    }
  }
}
@media (max-width: 420px) {
  .dialog {
    .card-login {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      position: relative;
      width: 500px;
      min-height: 200px;
      padding: 20px;
      .register-btn {
        border-top: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn {
          color: white;
          margin-top: 10px;
          border-radius: 8px;
          width: 150px;
          height: 30px;
        }
      }
    }
    .blok-right,
    .blok-bottom,
    .blok-left,
    .blok-top,
    .blok-one {
      position: absolute;
      backdrop-filter: blur(5px);
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    }

    .blok-right {
      z-index: 1px;
      top: 90px;
      right: -10px;
      width: 60px;
      height: 60px;
    }
    .blok-bottom {
      z-index: 2;
      top: 350px;
      left: -30px;
      width: 70px;
      height: 70px;
    }
    .blok-left {
      z-index: 2;
      top: 450px;
      right: 10px;
      width: 40px;
      height: 40px;
    }
    .blok-top {
      z-index: 2;
      bottom: 50px;
      left: 50px;
      width: 30px;
      height: 30px;
    }
    .blok-one {
      z-index: 2;
      top: 30px;
      left: 100px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>

<style lang="scss">
.q-dialog__backdrop {
  background: rgba(0, 0, 0, 0.1);
}
.dialog {
  background-image: url("data:image/jpeg;base64,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");
  max-height: 100vh;
  max-width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
