// axios 全局配置 3 种方法:
// 结合vue-axios使用    import axios from 'axios'  import VueAxios from 'vue-axios'   Vue.use(VueAxios)
// axios改写为Vue的原型属性     Vue.prototype.axios = axios
// 结合Vuex的action   this.$store.dispatch

import axios from 'axios'
// 全局的axios默认值
axios.defaults.baseURL = 'http://192.168.42.2:3000';
axios.defaults.headers['Content-Type'] = 'application/json';

// 超时设置
// axios.defaults.timeout = 2500;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  console.log(config,79878);
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error);
});
export default axios;