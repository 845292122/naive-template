import { createRouter, createWebHistory } from 'vue-router'
import { setupRouterGuard } from './guards'
import { bizRoutes } from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: () => import('~/views/login/index.vue'),
      meta: {
        title: '登录',
        layout: 'blank'
      }
    },
    {
      name: 'Profile',
      path: '/profile',
      component: () => import('~/views/profile/index.vue'),
      meta: {
        title: '账户资料'
      }
    },
    ...bizRoutes,
    {
      name: '404',
      path: '/404',
      component: () => import('~/views/error/404.vue'),
      meta: {
        title: '页面飞走了'
      }
    }
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export async function setupRouter(app) {
  app.use(router)
  setupRouterGuard(router)
}
