import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
  /*
  这里本来应该是 
  template : `<App> </App>`
  但是因为 import Vue from 'vue' 这里引入了精简版（不包含模板解析）
  */
})