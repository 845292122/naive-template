import 'uno.css'
import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import 'ant-design-vue/dist/reset.css'

async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  await setupRouter(app)
  app.use(Antd)
  app.mount('#app')
}

bootstrap()
