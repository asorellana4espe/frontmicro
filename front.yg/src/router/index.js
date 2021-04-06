import Vue from "vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "About",
    component: Login,
    meta: { hideForAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
