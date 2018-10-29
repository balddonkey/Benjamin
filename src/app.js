import Vue from 'vue'
console.log('vue:' + Vue);
import App from './App.vue'

// Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')