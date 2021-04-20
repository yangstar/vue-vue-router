import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

import home from './components/home'
import about from './components/about'

const routes = [
    { path: '/', component: home },
    {name: 'home', path: '/home', component: home },
    {name: 'about', path: '/about', component: about }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes // (缩写) 相当于 routes: routes
})
new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')
