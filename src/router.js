
import VueRouter from 'vue-router'

import View from './View.vue'
import Error404 from './Error404.vue'

const routes = [
  { path: '/view/:id', component: View, name: "page", props: true },
  { path: '/', redirect: { name: 'page',params: { id: 'home' }} },
  { path: '*', component: Error404 },
];

export default new VueRouter({
  mode: 'history',
  routes
});
