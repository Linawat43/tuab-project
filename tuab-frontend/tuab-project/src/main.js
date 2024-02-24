import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import vuetify from './plugins/vuetify'

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
