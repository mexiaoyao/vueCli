import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./mock/index.js";

// ant-design-vue 引入组件库 引入样式表--
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 全局引用IconFont
import { Icon } from "ant-design-vue";
import * as iconUrl from "./assets/iconfont/iconfont.js";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: iconUrl,
});
Vue.component("icon-font", IconFont);

//可以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
