// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Axios from 'axios';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import Store from './vuex/store'

Vue.use(ElementUi);
Vue.prototype.$http=Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  ElementUi,
  Axios,
  router,
  Store,
  components: { App },
  template: '<App/>'
})
