<template>
  <div class="main">
    <Nav></Nav>
    <div class="contenido">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Nav,
  },
};
</script>
