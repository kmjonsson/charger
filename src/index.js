import 'bulma/css/bulma.css'

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import './components.js'

Vue.use(VueRouter);

import router from './router.js'

var app = new Vue({
  //store,
  el: '#app',
  router,
  render: h => h(App),
});
