import Vue from 'vue'
import App from './App.vue'
import './plugins/quill'
import './plugins/element.js'
import Api from './api';
import Util from './utils';
import '@/assets/css/base.css'
import "./components/base";
import store from "./store";
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL:'http://192.168.30.20:20001',//'http://192.168.60.190:11000/',http://beonelife.cn:6001/
  timeout:5000,
  
})
Vue.prototype.$api = Api;
Vue.prototype.$util = Util;

Vue.config.productionTip = false
Vue.prototype.BASE_URL = process.env.BASE_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')