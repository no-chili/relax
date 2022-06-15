import axios from "axios";
const http = axios.create({
  //baseURL该实例每次发起请求会添加上该URL
  baseURL: "https://some-domain.com/api/",
  //超时，超过时间无响应http取消请求
  timeout: 3000,
  //请求头，可以设置token等信息
  headers: { "X-Custom-Header": "foobar" },
});

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export { http };
