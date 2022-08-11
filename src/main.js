// import "babel-polyfill";
// require('es6-promise').polyfill()
// let VConsole = require('../node_modules/vconsole/dist/vconsole.min');
// let vConsole = new VConsole();
// Vue.use(vConsole);
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vConsole from '@/modules/vconsole.js'

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)   //引入粘贴板

import axios from 'axios';
Vue.prototype.$axios = axios;
// axios.defaults.baseURL = '/api'  // 改成/api才能用proxyTable跨域

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('usertoken')) {
      config.headers.Authorization = localStorage.getItem('usertoken');
    }
 
    return config;
  },
  error => {
    return Promise.reject(error);
  });

axios.interceptors.response.use(
  response => {
    let token = localStorage.getItem('usertoken');
    if(!token){//有没有token
      router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath//登录之后跳转到对应页面
              }

            });
      }
      if(response.data.code==400){
      	 router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath//登录之后跳转到对应页面
              }

            });
      }

    return response;  //请求成功的时候返回的data
  },
  error => {
    try {
      if (error.response) {
        endLoading();
        
      }
      return Promise.reject(error.response.data)
    }
    catch (e) {
    }
  });



import vueCookie from 'vue-cookies'
Vue.use(vueCookie)


import qs from "qs"
Vue.prototype.$qs = qs;

//import VueResource from 'vue-resource'
//Vue.use(VueResource)




Vue.config.productionTip = false

import "@/stylesheets/main.scss"     //引入main.scss
import "@/modules/rem.js"        //适配机型



import Bridge from "@/modules/bridge.js"
Vue.prototype.$bridge = Bridge;

import {InfiniteScroll , Loadmore } from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.component("mt-loadmore", Loadmore);

//后台框架模板
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

      import 'xe-utils'
      import VXETable from 'vxe-table'
      import 'vxe-table/lib/style.css'
      Vue.use(VXETable)

// 控制路由表的js文件
import '@/permission.js'

Vue.prototype.$XModal = VXETable.modal

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
