// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import { store } from './vuex/Store'

// routers
import { router } from './router'



// css
import './style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  data: {
  },
  router,
  template: '<App/>',
  components: { App }
})
