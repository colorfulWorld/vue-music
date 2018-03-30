import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import 'common/stylus/index.styl'
fastclick.attach(document.body)

// eslint 不允许直接new 之后不赋值不使用
let Vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})

Vue.use({
  Vm
})
