import axios from "axios";

/* 请求拦截器，设置跨域，一般不需要主动设置，应全有服务端设置 */
axios.interceptors.request.use((config) => {
  config.headers["Access-Control-Allow-Origin"] = "*"; // cookie模式下不能设置为*，应设置具体域名，如http://www.example.com
  config.headers["Access-Control-Allow-Methods"] =
    "POST,GET,OPTIONS,DELETE,HEAD,PUT,PATCH";
  config.headers["Access-Control-Allow-Headers"] =
    "Authorization, Origin, X-Requested-With, Content-Type, Accept, token";
  config.headers["Access-Control-Allow-Credentials"] = "true"; // 保持前端跨域时携带的cookie
  config.headers.token = "localStorage.getItem(Constants.LOCAL_STORAGE.TOKEN)";
  config.headers.timestamp = Date.now();
  return config;
});

/* 响应拦截器，对接口返回errorCode进行判断跳转 */
axios.interceptors.response.use(
  (response) => {
    const responseData = response.data;
    if (responseData.code === 1) {
      // 处理错误码，若返回成功则进入resolve
      return Promise.resolve(responseData);
    } else if (response.config.responseType === "blob") {
      // 取请求头用
      return Promise.resolve(responseData);
    } else if (responseData.code === 102) {
      // 用户会话过期
      // 跳转到登录页
      router.replace("/login").then(() => {
        //ModalUtil.openMsgWarning("未登录请重新登录");
      });
      return response;
    } else {
      // 是接口返回参数的错误
      return Promise.reject(responseData);
    }
  },
  (error) => {
    // 处理状态码
    if (error && error.message === "interrupt") {
      console.log("已中断请求");
    } else if (error && error.response) {
      const statusCode = error.response.status;
      switch (statusCode) {
        case 401: // 若用户session为空
        case 502: // 无法连接服务器
        case 503: // 服务器重启
          break;
        case 404: // 接口未找到
          break;
        default: // 其他错误
          break;
      }
    } else {
      // 其他错误
      ModalUtil.openMsgWarning("系统异常");
    }
    // 是接口返回参数的错误
    return Promise.reject(error);
  }
);
