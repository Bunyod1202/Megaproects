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
        :rules="[(val) => val.length <= 6 || 'Please use maximum 6 characters']"
      />
      <q-input
        class="input input-password"
        standout="standout-bg"
        ref="inputRef"
        v-model="password"
        label="пароль "
        :type="isPwd ? 'password' : 'text'"
        :rules="[(val) => val.length <= 4 || 'Please use maximum 4 characters']"
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
      <q-btn
        class="btn"
        color="white"
        @click="btnSave"
        text-color="black"
        label="вайти "
      />
    </q-card-section>
  </div>
  <div class="welcome" v-else>
    <q-btn class="btn" color="white" text-color="black" v-close-popup
      >добро пожаловать</q-btn
    >
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const add = ref(true);
    let lastName = ref("");
    let password = ref("");
    let myPassword = ref("2002");
    let myName = ref("Bunyod");
    const inputRef = ref(null);
    return {
      lastName,
      password,
      myPassword,
      myName,
      isPwd: ref(true),
      add,
      inputRef,
      btnSave() {
        if (
          lastName.value == myName.value ||
          password.value == myPassword.value
        ) {
          add.value = false;
        }
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
      color: black;
      text-align: center;
    }
  }
  .input-group {
    .input {
      margin-top: 15px;
      color: #000;
      border-radius: 8px;

      background-color: #fff;
    }
  }
  .btn-save {
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      background-color: black;
      border: 1px solid white;
      box-shadow: 0px 0px 1px 1px black;
      color: white;
      border-radius: 8px;
      width: 100px;
      height: 30px;
    }
  }
}
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 66%;
  width: 96%;
  background-color: #fff;
  z-index: 2;
  .btn {
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
</style>
