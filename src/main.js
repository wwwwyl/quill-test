import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios, { Axios } from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
