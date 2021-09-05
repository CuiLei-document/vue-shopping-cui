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
    component: () => import('../views/home/Home.vue'),
    meta: {
      isLogin: true
    }
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
  {
    path: '/detail/:iid',
    component: () => import('views/detail/Detail.vue'),
    name:"Detail"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   console.log(to.meta)
//   next()
// })
export default router
