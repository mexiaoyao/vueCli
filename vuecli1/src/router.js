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
          path: "/filedId",
          name: "filedid",
          component: () => import("./views/filedId.vue"),
          children: [
            {
              path: "/detail/:id/:uuid",
              name: "detail",
              component: () => import("./views/filedId.vue"),
            },
          ],
        },
        //测试data和computed的区别
        {
          path: "/computedUrl",
          name: "computedName",
          component: () => import("./views/computedPage.vue"),
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
