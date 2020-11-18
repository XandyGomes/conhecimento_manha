import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//temporário
require('axios').defaults.headers.common['Authorization']='bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkFsZXhhbmRyZSBHb21lcyIsImVtYWlsIjoiYWxleGFuZHJlLnNpbHZhMTI0QGZhdGVjLnNwLmdvdi5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDU3MDU5NjAsImV4cCI6MTYwNTk2NTE2MH0.CJPXhq8zqOGdjp9gVQtgUiv0y9BRPBvijKa2FqbtbjA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')