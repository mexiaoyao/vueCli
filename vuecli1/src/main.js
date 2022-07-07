import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// ant-design-vue 引入组件库 引入样式表--
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import { Icon } from "ant-design-vue";
export default Icon.createFromIconfontCN({
  scriptUrl: "../public/iconfont/iconfont.js",
});

//可以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;
Vue.use(Antd);

Vue.component("icon", "<div>12233</div>");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
