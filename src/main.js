import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyPlugin from './loading.js'
// import './registerServiceWorker'
// Vue.config.productionTip = false
console.log(process.env);


Vue.use(MyPlugin, { ddd: 1 });

console.log(store);
console.log(store.dispatch('increment'));

Vue.mixin({
  updated: function () {
    console.log('mixin--', this.b);
  }
})
let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


console.log(vm.$loading);