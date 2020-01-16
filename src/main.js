// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import vueResource from 'vue-resource'
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './config/rem'

Vue.use(vueResource);
Vue.use(mintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
