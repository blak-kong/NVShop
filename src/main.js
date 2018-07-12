// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import imcatUi from 'imcat-ui'
import 'imcat-ui/lib/index.css'
Vue.use(imcatUi)

import './assets/style/common.less'

// import '@/utils/rem.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
