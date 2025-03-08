import { createPinia } from 'pinia'

export function setupStore(app) {
  const pinia = createPinia()
  app.use(pinia)
}

export * from './app.store'
export * from './auth.store'
