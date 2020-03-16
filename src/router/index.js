import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
  path : '/:lang',
  component : {
    render (c){return c('router-view')}
  },
  children : [
  {
    path: '/',
    name: 'Home',
    component: Home
  }]
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
