import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile.vue')
  },
  {
    path: '/Shopping',
    component: () => import('../views/shop/Shopping.vue')
  },
  {
    path: '/user',
    component: () => import('../views/user/User.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
