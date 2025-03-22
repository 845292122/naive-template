import { createDiscreteApi } from 'naive-ui'
const { loadingBar } = createDiscreteApi(['loadingBar'])

/**
 * 路由加载动画
 */
export function createLoadingGuard(router) {
  router.beforeEach(() => {
    loadingBar.start()
  })
  router.afterEach(() => {
    setTimeout(() => {
      loadingBar.finish()
    }, 100)
  })
  router.onError(() => {
    loadingBar.error()
  })
}
