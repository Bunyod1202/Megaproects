<template>
  <div v-if="add">
    <q-card-section class="items-center">
      <div class="text">Авторизация</div>
    </q-card-section>
    <q-card-section class="input-group">
      <q-input
        class="input input-name"
        standout="standout-bg"
        ref="inputRef"
        v-model="lastName"
        label="имя"
        error-message="логин не сущесвуют "
        :error="!isValid"
      />
      <q-input
        class="input input-password"
        standout="standout-bg"
        ref="inputRef"
        v-model="password"
        label="пароль "
        :type="isPwd ? 'password' : 'text'"
        :error="!isValideyta"
        error-message="пароль не правильно "
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          /> </template
      ></q-input>
    </q-card-section>
    <q-card-section class="btn-save">
      <q-btn class="btn" @click="btnSave"
        ><div v-if="loder">вайти</div>
        <div v-else><q-spinner-gears color="blakc" size="1em" /></div
      ></q-btn>
    </q-card-section>
  </div>
  <div class="welcome" v-else>
    <q-btn class="btn" color="white" text-color="black" v-close-popup
      ><img src="icons/favicon-32x32.png" alt="" style="width: 100px" />
      <h3>Bunyod</h3></q-btn
    >
  </div>
  <div class="welcome" v-show="user">
    <q-btn
      class="btn"
      color="white"
      to="/Carusel"
      text-color="black"
      v-close-popup
      ><img src="icons/favicon-32x32.png" alt="" style="width: 100px" />
      <h3>Bunyod user</h3></q-btn
    >
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    const add = ref(true);
    const user = ref(false);
    const input1 = ref(false);
    const loder = ref(true);
    let lastName = ref("");
    let password = ref("");
    let myPassword = ref("2002");
    let myName = ref("Bunyod");
    let userPassword = ref("bunyod2002");
    let userName = ref("Bunyod");
    const inputRef = ref(null);
    return {
      lastName,
      password,
      myPassword,
      myName,
      isPwd: ref(true),
      add,
      user,
      inputRef,
      input1,
      loder,
      isValid: computed(
        () =>
          lastName.value == "" ||
          input1.value == false ||
          lastName.value == myName.value
      ),
      isValideyta: computed(
        () =>
          password.value == "" ||
          input1.value == false ||
          password.value == myPassword.value
      ),
      btnSave() {
        if (
          lastName.value == myName.value &&
          password.value == myPassword.value
        ) {
          loder.value = false;
          setTimeout(() => {
            loder.value = true;
            add.value = false;
          }, 3000);
        } else {
          loder.value = false;
          input1.value = true;
          setTimeout(() => {
            if (lastName.value == myName.value) {
            } else {
              lastName.value = "";
            }
            if (password.value == myPassword.value) {
            } else {
              password.value = "";
            }
            loder.value = true;
          }, 2000);
        }
        if (
          lastName.value == userName.value &&
          password.value == userPassword.value
        ) {
          user.value = true;
        }
        setTimeout(() => {
          input1.value = false;
        }, 2000);
        reset();
      },
      reset() {
        inputRef.value.resetValidation();
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.card-login {
  position: relative;
  width: 500px;

  padding: 20px;
  .items-center {
    .text {
      font-size: 35px;
      font-weight: bolder;
      color: white;
      text-align: center;
    }
  }
  .input-group {
    .input {
    }
  }
  .btn-save {
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      background-color: white;
      border-radius: 35px;
      color: black;

      width: 100px;
      height: 30px;

      &:hover {
        color: white !important;
        background-color: #000;
        filter: drop-shadow(0 0 2px white) drop-shadow(0 0 5px white)
          drop-shadow(0 0 15px white);
      }
    }
  }
}
.welcome {
  left: 0px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  .btn {
    width: 90%;
    height: 80%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 10px 5px;
    &:hover {
      box-shadow: 0px 0px 10px 5px gray;
    }
  }
}
</style>
<style lang="scss">
.q-field__control {
  background: rgba(255, 255, 255, 0.1);
}
.q-field--standout.q-field--highlighted .q-field__control {
  background: rgba(255, 255, 255, 0.2);
}
.q-field--standout .q-field__control:before {
  background: rgba(255, 255, 255, 0.1);
}
.q-field--standout.q-field--error .q-field__control {
  background: red;
}
.q-field--standout.q-field--highlighted {
  .q-field__append {
    color: black !important;
  }
  .q-field__native {
    color: black !important;
  }
}
.q-field--standout .q-field__control {
  background: rgba(255, 255, 255, 0);
  border-radius: 35px;
  padding: 0px 20px;
}
.q-field--labeled .q-field__native,
.q-field--labeled .q-field__prefix,
.q-field--labeled .q-field__suffix {
  background-color: rgba(255, 255, 255, 0);
}
.q-field--standout .q-field__control {
  margin-top: 15px;
  color: #000;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
