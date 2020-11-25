import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//temporário
require('axios').defaults.headers.common['Authorization']='bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkFsZXhhbmRyZSBHb21lcyIsImVtYWlsIjoiYWxleGFuZHJlLnNpbHZhMTI0QGZhdGVjLnNwLmdvdi5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDYzMDg5MDAsImV4cCI6MTYwNjU2ODEwMH0.sVYsykXgXjXlk3x0eW4jy6YGFY237RXXnXfJnxpn4Ug'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')