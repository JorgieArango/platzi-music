import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import EventBus from '@/plugins/event-bus'

import routes from "@/routes";
import msToMin from "@/filters/ms-to-min";
import blur from '@/directives/blur'
import store from '@/store'

Vue.use(blur)
Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMin)

const router = new VueRouter({
  routes,
  mode: 'history'}) //important to have a server that supports this functionality

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
