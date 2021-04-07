<template>
  <div class="about">
    <input type="text" v-model="user" placeholder="Usuario" />
    <input type="password" v-model="password" placeholder="Contraseña" />
    <button class="btningresar" @click="login()" name="ingresar" id="ingresar">
      Ingresar
    </button>
    <strong class="error">{{ msg }}</strong>
  </div>
</template>

<script>
import Auth from "../Controllers/Auth.js";
import Globals from "../Controllers/Globals.js";

export default {
  data() {
    return {
      user: "web",
      password: "webpass",
      msg: "",
    };
  },
  methods: {
    login: async function () {
      console.log(this.user + " " + this.password);
      let respond = await Auth.login(this.user, this.password, Globals._URL);
      let basicauth = respond.data;
      if (basicauth) {
        Auth.setUserLogged(basicauth);
        location.reload();
      } else {
        this.msg = "Credenciales incorrectas";
      }
    },
  },
};
</script>
