<template>
  <div>
    <navegacion></navegacion>
    <div class="panel activo" id="contenido_body">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navegacion from "@/components/Navegacion.vue";

export default {
  name: "Home",
  components: {
    Navegacion,
  },
};
</script>
<style>
* {
  font-family: sans-serif;
}
</style>
