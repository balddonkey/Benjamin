import Vue from 'vue'
import 'babel-polyfill'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
new Vue({
  render: h => h(App)
}).$mount('#app')