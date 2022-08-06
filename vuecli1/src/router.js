import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layouts",
      component: () => import("./components/layouts/index.vue"),
      //定义嵌套路由
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("./views/Home.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("./views/About.vue"),
        },
        {
          path: "/index",
          name: "index",
          component: () => import("./views/Index.vue"),
        },
        {
          path: "/filedId/:id/:uuid",
          name: "filedid",
          component: () => import("./views/filedId.vue"),
        },
      ],
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("./views/About.vue"),
    // },
  ],
});
