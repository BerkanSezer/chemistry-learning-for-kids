import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  mutations: {

  }
})



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2, {
  position: 'top-end',
  toast: true,
  timer: 3000
});


new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
