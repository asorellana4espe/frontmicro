import Vue from "vue";
import Pago from "../views/Pago.vue";
import Home from "../views/Home.vue";
import Curso from "../views/Curso.vue";
import Login from "../views/Login.vue";
import Persona from "../views/Persona.vue";
import VueRouter from "vue-router";
import Matricula from "../views/Matricula.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Root",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/cursos",
        component: Curso,
        meta: { requiresAuth: true },
      },
      {
        path: "/personas",
        component: Persona,
        meta: { requiresAuth: true },
      },
      {
        path: "/pagos",
        component: Pago,
        meta: { requiresAuth: true },
      },
      {
        path: "/matriculas",
        component: Matricula,
        meta: { requiresAuth: true },
      },
    ],
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
