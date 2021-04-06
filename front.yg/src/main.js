import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import VueAxios from "vue-axios";
import verificate from "./Verificate";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!verificate.isAuthenticated()) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    if (to.matched.some((record) => record.meta.hideForAuth)) {
      if (verificate.isAuthenticated()) {
        next({ path: "/" });
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
