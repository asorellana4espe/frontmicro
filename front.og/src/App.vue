<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
.router-link-active a {
  background-color: #f1f1f1;
  font-weight: bold;
  color: #172b4d !important;
}
.header {
  margin: 10px;
  margin-top: 15px;
  border-radius: 10px;
  background: white;
  padding: 10px;
  color: rgb(13, 58, 95);
}
.contenido {
  margin: 10px;
  border-radius: 10px;
  background: white;
  padding: 10px;
}
body {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.campo-1,
.campo-1-2,
.campo-2-3,
.campo-1-4,
.campo-1-3,
.campo-1-5 {
  position: relative;
  margin: 5px 3px;
}

.campo-1 {
  width: 96%;
}

.campo-1-2 {
  width: 48%;
}

.campo-2-3 {
  width: 64%;
}

.campo-1-3 {
  width: 32%;
}

.campo-1-4 {
  width: 24%;
}

.campo-1-10 {
  width: 10%;
}

.campo-1-5 {
  width: 19.2%;
}

.centered {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.center-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}

.center-center::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.center-center {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.shadow {
  -webkit-box-shadow: inset 0px 0px 30px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 30px -5px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 30px -5px rgba(0, 0, 0, 0.75);
  height: 100vh;
}

.next-btn {
  background: #2c3e50;
  color: white !important;
  padding: 5px 10px;
  border-radius: 10px;
  transition: all 0.4s ease;
  margin: 5px;
  cursor: pointer;
}

.next-btn:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

.surp-btn {
  background: #21817c;
  color: white !important;
  padding: 10px 15px;
  border-radius: 10px;
  transition: all 0.4s ease;
  margin: 5px;
  cursor: pointer;
}

.surp-btn:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}
.subtitulo {
  text-align: left;
  width: 100%;
}
.main-btn {
  background: #a0152c;
  color: white !important;
  padding: 6px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: all 0.4s ease;
  margin: 5px;
  font-size: 17pt;
}

.main-btn:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

.fondo {
  position: absolute;
  user-select: none;
  width: 50%;
  opacity: 0.1;
}

.hidden {
  transform: scale(0);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  display: none !important;
}

.not-hidden {
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  display: flex !important;
}

.titulo {
  text-align: center;
  margin: 25px 5px;
}

.lbl-error {
  color: #a0152c;
  font-style: italic;
  font-size: 15px;
}

.user {
  border: 2px solid #2c3e50;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 30px;
  padding: 6.5px;
  cursor: pointer;
  background: #2c3e50;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 7px;
  left: 7px;
  transition: all 0.4s ease;
  z-index: 1000;
}

.user:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

.cerrar {
  border: 2px solid #a0152c;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 33px;
  padding: 6.5px;
  cursor: pointer;
  background: #a0152c;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 7px;
  right: 7px;
  transition: all 0.4s ease;
  z-index: 20;
}

.cerrar:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

.editar {
  border: 2px solid #0db0c5;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 33px;
  padding: 6.5px;
  cursor: pointer;
  background: #0db0c5;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 7px;
  right: 60px;
  transition: all 0.4s ease;
  z-index: 20;
}

.editar:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

/* ============================================ RESPONSIVE =========================================*/
@media only screen and (max-width: 500px) {
  .campo-1,
  .campo-1-2,
  .campo-2-3,
  .campo-1-3,
  .campo-1-4,
  .campo-1-5,
  .fondo {
    width: 100%;
  }
  .align-left,
  .align-right {
    padding: 0px;
  }
}
</style>
