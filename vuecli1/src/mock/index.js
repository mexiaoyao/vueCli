// 首先引入Mock
const Mock = require("mockjs");

import "./modules/api";

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: "200-600",
});
