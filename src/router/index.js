import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * baseRoutes
 * 不用权限的路由
 */
export const baseRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  }
]

const router = new VueRouter({
  routes: baseRoutes
})

export default router

