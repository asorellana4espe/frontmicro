<template>
  <div class="inicio">
    <div id="formulario" class="container">
      <div class="centrado">
        <a href="#"><img :src="require('../assets/logo.png')" alt="logo" /></a>
      </div>

      <form>
        <div class="entrada">
          <i class="fa fa-user"></i>
          <input v-model="user" placeholder="Tu usuario" required autofocus />
        </div>
        <div class="entrada">
          <i class="fa fa-lock"></i>
          <input
            v-model="password"
            type="password"
            placeholder="Tu contraseña"
            required
          />
        </div>

        <div class="centrado">
          <button id="entrar" @click="login()" type="button" class="btn btn-lg">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Auth from "../Controllers/Auth.js";

export default {
  data() {
    return {
      user: "Admin",
      password: "ContraseñaAdmin2021",
    };
  },
  methods: {
    login: async function () {
      Auth.setUserLogged({
        nombre: "Admin",
        token: "No hay no valio",
      });
      location.reload();
    },
  },
};
</script>

<style scoped>
/*==========================Div de error============================*/

/*==========================Imagen Fondo y color texto============================*/
.inicio {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/fondoLogin.jpg") no-repeat center center fixed;
  background-size: cover;
}

.color {
  color: #11cdef;
  font-family: "FuenteNegrilla";
}

.error {
  color: #9d0f68;
  font-style: italic;
  font-weight: bold;
}

/*=========================Formulario=============================*/
#formulario {
  position: absolute;
  width: 30%;
  height: auto;
  background-color: #f7fafc;
  border-radius: 7px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
}

/*=========================Logo=============================*/
#formulario img {
  width: 80px;
}

/*=======================DivCentrado===============================*/
.centrado {
  width: 100%;
  text-align: center;
  margin: 10px 0px 10px 0px;
}

/*============================Dos columns centradas==========================*/
.izq,
.der {
  width: 50%;
  text-align: center;
  float: left;
}

/*==========================BotonFB============================*/
#botonfb {
  width: 90%;
  color: white;
  text-align: center;
  background: #1758f1;
  margin: 10px 0px 20px 0px;
  transition: all 0.3s;
}

#botonfb:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

/*========================Div entrada Texto==============================*/
.entrada {
  position: relative;
  width: 90%;
  height: 45px;
  margin: auto;
  border-radius: 7px;
  margin: 25px auto 25px auto;
  text-align: center;
  -webkit-box-shadow: 0px 3px 18px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 18px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 18px -10px rgba(0, 0, 0, 0.75);
}

.entrada i {
  position: absolute;
  font-size: larger;
  top: 50%;
  left: 2%;
  z-index: 999999;
  transform: translatey(-50%);
  -webkit-transform: translatey(-50%);
  -moz-transform: translatey(-50%);
}

.entrada input {
  font-family: sans-serif;
  border-radius: 7px;
  width: 100%;
  height: 100%;
  text-align: right;
  border: 0px;
  padding-right: 3%;
}

/*==========================Boton ingreso============================*/
#entrar {
  font-family: sans-serif;
  width: 40%;
  background-color: #11cdef;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bolder;
  color: white;
  margin: 35px auto 0px;
  transition: all 0.3s;
}

#entrar:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

/*==========================Responsive============================*/
/*Adapta según el alto alto*/

@media screen and (max-width: 980px) {
  #formulario {
    width: 60%;
  }
}

@media screen and (max-width: 980px) {
  #formulario {
    width: 100%;
  }
}
</style>
