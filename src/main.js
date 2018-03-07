import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import fastclick from 'fastclick';
// import router from './router'
fastclick.attach(document.body);

import 'common/less/index.less';

Vue({
  el: '#app',
  render: h => h(App)
});
