<template>
  <div class="about">
    <input type="text" v-model="user" placeholder="Usuario" />
    <input type="password" v-model="password" placeholder="Contraseña" />
    <button class="btningresar" @click="login()" name="ingresar" id="ingresar">
      Ingresar
    </button>
  </div>
</template>

<script>
import Auth from "../Controllers/Auth.js";
import Globals from "../Controllers/Globals.js";

export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login: async function () {
      let respond = await Auth.login(this.user, this.password, Globals._URL);
      console.log(respond);
      // if(respond.data.status==true){
      //     const user={
      //         token:respond.data.auth
      //     }
      //     Auth.setUserLogged(user);
      //     location.reload();
      // }else{
      //     let lbl = document.getElementById('msgerror');
      //     lbl.innerHTML = ""+respond.data.users;
      // }
    },
  },
};
</script>
