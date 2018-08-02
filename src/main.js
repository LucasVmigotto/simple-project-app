import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import store from './store'
import('vuetify/dist/vuetify.min.css')
import('material-design-icons-iconfont/dist/material-design-icons.css')

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#2196F3',
    secondary: '#64B5F6',
    accent: '#26A69A',
    error: '#f44336',
    warning: '#FB8C00',
    info: '#5C6BC0',
    success: '#4caf50'
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
