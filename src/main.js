import Vue from 'vue'
import App from './App'
import qs from 'qs'
import login from './components/login'
import index from './components/index'
import register from './components/Register';

// import axiosApi from './api/axios';
// Vue.use(axiosApi)

// 导入mint
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = false

// 导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 请求数据
import axios from 'axios';
// Vue.use(axios);

Vue.use(qs);

import 'mint-ui/lib/style.css';
import './assets/css/basic.scss';

//将axios挂载到原型上
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

// 创建路由 
const routes = [
  {path : '/login',component: login,name:'login'},
  {path : '/index',component: index,name:'index'},
  {path : '/register',component: register,name:'registermin'},

  {path :'*',redirect:'/login'}  /** 默认跳转路由 */
]

// 实例化路由
const router = new VueRouter({
  mode:'history', // hash模式改为history
  routes    //  相当于routes: routes
})

new Vue({
  el: '#app',
  router,
  // axios,
  render: h => h(App)
})