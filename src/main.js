import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios

import store from './store'

import VuePhotoZoomPro from 'vue-photo-zoom-pro' 
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VuePhotoZoomPro)


//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//使用element-ui
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
