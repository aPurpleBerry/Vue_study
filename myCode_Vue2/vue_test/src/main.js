import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false


import vueResource from 'vue-resource'
Vue.use(vueResource) // 使用插件  
// 之前 VUE.USE之后每一个 VC身上都多了一个 $http


import store from './store/index'

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  store
})