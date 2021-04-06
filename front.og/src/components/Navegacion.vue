<template>
  <div>
    <input type="checkbox" id="check" checked="true" />
    <label for="check">
      <i class="fa fa-bars" id="btn"></i>
      <i class="fa fa-angle-double-left" id="cancel"></i>
    </label>
    <div class="sidebar">
      <header class="cabecera">
        <img style="width: 100px;" class="logo" :src="require('../assets/logo.png')" alt="logo" />
      </header>
      <ul class="" id="">
        <li>
          <router-link to="/cursos" title="cursos">
            <a href="#">Cursos</a>
          </router-link>
        </li>
        <li>
          <router-link to="/personas" title="personas">
            <a href="#">Personas</a>
          </router-link>
        </li>
        <li>
          <router-link to="/pagos" title="pagos">
            <a href="#">Pagos</a>
          </router-link>
        </li>
        <li>
          <router-link to="/matriculas" title="matriculas">
            <a href="#">Matriculas</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {};
  },
  methods: {
    menu(){
      var panel = document.getElementById("contenido_body");
      var check = document.getElementById("check");

      check.addEventListener("change", function () {
        if (check.checked) {
          panel.classList.add("activo");
        } else {
          panel.classList.remove("activo");
        }
      });

      function myFunction(x) {
        if (x.matches) {
          // If media query matches
          document.getElementById("check").checked = false;
          panel.classList.remove("activo");
        } else {
          document.getElementById("check").checked = true;
          panel.classList.add("activo");
        }
      }
      
      var x = window.matchMedia("(max-width: 680px)");
      myFunction(x);
      x.addListener(myFunction);
    }
    // setGlobals() {
    //   globals._USER = auth.getUserLogged();
    //   globals._TOKEN = globals._USER.token.access_token;
    //   globals._REFRESH_TOKEN = globals._USER.token.refresh_token;
    //   globals._EXPIRES_TIME = globals._USER.token.expires_in;
    //   globals._HEADERS = {
    //     Accept: "application/json",
    //     "Content-Type": "multipart/form-data",
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + globals._TOKEN,
    //   };
    // },
  },
  mounted() {
    this.menu();
  },
  created() {
    // this.setGlobals();
  },
};
</script>
<style>
.sidebar {
  position: fixed;
  top: 0px;
  left: -250px;
  width: 252px;
  height: 100%;
  background-color: #172b4d;
  transition: all 0.5s ease;
}

.cabecera {
  position: relative;
  font-size: 20px;
  height: auto;
}

.cabecera img {
  margin: 25px 45px;
  transition: all 0.3s ease;
}

.cabecera img:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

.footer {
  position: absolute;
  bottom: 0px;
  background-color: #00a1d2;
  height: 110px;
  display: flex;
  width: 255px;
  align-items: center;
}
.sidebar .items {
  transform: translateY(-50px);
  -webkit-transform: translateY(-50px);
  -moz-transform: translateY(-50px);
  /* transition: all 0.4s ease; */
}
.sidebar .items.active {
  transform: translateY(0px);
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  /* background-color: #f1f1f1; */
}

.sidebar .user {
  background-color: rgba(16, 140, 235, 0.3);
  visibility: hidden;
  transform: scale(0);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  transition: all 0.4s ease;
}

.sidebar .user.active {
  visibility: visible;
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
}

.sidebar header {
  color: white;
  font-size: 22px;
  height: auto;
  user-select: none;
  cursor: pointer;
  text-align: center;
}

.sidebar header i {
  text-decoration: none;
  padding: 10px;
  border-radius: 45px;
  width: 45px;
  height: 45px;
  background-color: rgb(255, 255, 255);
  color: #17325a;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 50px;
  -webkit-box-shadow: 0px 3px 19px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 3px 19px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 19px 1px rgba(0, 0, 0, 0.5);
}

.sidebar ul li {
  text-decoration: none;
  list-style: none;
  display: block;
  height: 100%;
  width: 100%;
  line-height: 45px;
  font-size: 16px;
  color: white;
  box-sizing: border-box;
  transition: 0.4s;
}

.sidebar ul li a {
  text-decoration: none;
  display: block;
  height: 100%;
  width: 100%;
  line-height: 45px;
  font-size: 16px;
  color: white;
  padding-left: 10px;
  box-sizing: border-box;
  transition: 0.4s;
}

.sidebar ul {
  padding: 0px;
}

.sidebar ul li a.activo {
  background-color: f1f1f1;
  color: #172b4d;
  font-size: 18px;
  font-weight: bold;
  padding-left: 35px;
}

ul li:hover a {
  padding-left: 20px;
  background-color: #f1f1f1;
  font-weight: bold;
  color: #172b4d;
}
ul li a:focus {
  background-color: #f1f1f1;
  font-weight: bold;
  color: #172b4d;
}
ul li a img {
  margin: 0px 15px;
}

#check {
  display: none;
}

label {
  display: inline;
}

label #btn,
label #cancel {
  position: fixed;
  cursor: pointer;
  border-radius: 5px;
  background-color: #172b4d;
  font-size: 25px;
  padding: 6px;
  color: white;
  top: 13px;
  width: 35px;
  height: 35px;
  left: 10px;
  text-align: center;
  transition: all 0.5s ease;
  z-index: 1;
}

label #cancel {
  visibility: hidden;
  opacity: 0;
}

#check:checked ~ .sidebar {
  left: 0px;
}

#check:checked ~ label #btn {
  visibility: hidden;
  opacity: 0;
}

#check:checked ~ label #cancel {
  visibility: visible;
  opacity: 1;
  left: 260px;
}

.panel {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  min-height: 99vh;
  width: auto;
  background-color: #f1f1f1;
  transition: all 0.5s ease;
  z-index: -1;
  overflow: hidden;
  padding: 10px 10px 10px 10px;
}

.panel.activo {
  left: 255px;
}

.panel .cabecera {
  font-size: 20px;
  background-color: rgb(255, 255, 255);
  height: auto;
  padding: 10px 10px 10px 10px;
}

.panel header {
  color: #172b4d;
  font-size: 22px;
  height: 100px;
  margin-bottom: 10px;
  user-select: none;
  text-align: left;
}
.cls-1 {
  width: 10%;
  margin-top: 6px;
}
.sidebar ul li:hover a svg .cls-1 {
  fill: #172b4d;
}
.sidebar ul li a:focus svg .cls-1 {
  fill: #172b4d;
}
.sidebar ul li a.activo svg .cls-1 {
  fill: #172b4d;
}
.sidebar ul li a svg .cls-1 {
  fill: #ffffff;
}

.cabecera .iconos {
  float: right;
}
/* ============================================================footer - perfil usuario============================= */
.btnperfil {
  text-decoration: none;
  text-align: center;
  text-decoration-color: #253166;
  color: #253166;
  font-size: bold;
  background-color: white;
  padding: 6px 20px;
  height: auto;
  width: 255px;
  transition: all 0.4s ease;
}
.btnperfil:hover {
  background-color: #00a1d2;
  color: white;
  transform: scale(1.03);
  -webkit-transform: scale(1.03);
  -moz-transform: scale(1.03);
}
.btnsesion {
  margin: 4px 30px;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  background-color: #00a1d2;
  border-radius: 20px;
  padding: 3px 20px;
  height: 30px;
  width: 200px;
  transition: all 0.4s ease;
}
.btnsesion:hover {
  transform: scale(1.03);
  -webkit-transform: scale(1.03);
  -moz-transform: scale(1.03);
}
.dividerperfil {
  background-color: #00a1d2;
  height: 2px;
  width: 100%;
}

/* ============================================ RESPONSIVE =========================================*/
@media only screen and (max-width: 780px) {
  .sidebar ul li a {
    font-size: 12px;
  }
  .cls-1 {
    width: 10%;
    margin-top: 0px;
  }
  .cabecera .iconos {
    width: 40px;
    height: 40px;
  }
  .cabecera img {
    width: 80px;
  }
}

@media only screen and (max-width: 1024px) {
  .sidebar ul li a {
    font-size: 12px;
  }
  .cls-1 {
    width: 10%;
    margin-top: 0px;
  }
  .cabecera img {
    width: 80px;
  }
}
</style>
>
