import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/AboutUs",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AboutUs.vue")
    },
    {
    path: "/Businesses",
    name: "business",
    component: () =>
        import( "./views/Businesses.vue")
    },
    {
      path: "/ContactUs",
      name: "contact",
      component: () =>
      import("./views/ContactUs.vue")
      }
  ]
});
