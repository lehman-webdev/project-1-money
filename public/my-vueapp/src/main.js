import Vue from "vue";
import vueResource from 'vue-resource';
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";

Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
