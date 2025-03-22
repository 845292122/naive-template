import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default () => {
  return Components({
    resolvers: [NaiveUiResolver()]
  })
}
