// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import iView from 'iview' // 引入iview
import 'iview/dist/styles/iview.css' // 引入iview 样式文件
// 引入vueRouter
import VueRouter from 'vue-router'
import routerConfig from './router'
// 引入vuex
import Vuex from 'vuex' 
import storeConfig from './store'

import request from './plugins/request'

import path from './config/config';

import Echarts from 'echarts'; // 使用echarts

import pdfjs from 'pdfjs'

import pdfpdfjs from './plugins/pdfpdf'

Vue.config.productionTip = false;
Vue.prototype.$echarts = Echarts; // 使用echarts 必须 放入 vue 文件中的 mounted 方法中，放入created 方法中不可以

/* eslint-disable no-new */
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(request);
Vue.use(path);
Vue.use(pdfpdfjs);

Vue.prototype.$pdfjs = pdfjs


let router = new VueRouter(routerConfig);
let store = new Vuex.Store(storeConfig);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
