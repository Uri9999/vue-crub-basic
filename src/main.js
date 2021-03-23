import Vue from 'vue'
import App from './App.vue'

// bootstrap
// npm i bootstrap jquery popper.js
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// axios
// npm install --save axios vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// router
import VueRouter from 'vue-router'
import List from './components/admin/List'
import Edit from './components/admin/Edit'
import Create from './components/admin/Create'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/list', component: List, name: 'list'},
    { path: '/edit', component: Edit, name: 'edit' },
    { path: '/create', component: Create, name: 'create' },
  ]
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
