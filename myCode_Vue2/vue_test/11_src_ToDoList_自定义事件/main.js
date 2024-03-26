import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false


// import plugins from './plugins'
// Vue.use(plugins)  // 使用插件


new Vue({
  el: '#app',
  render: h => h(App)
})