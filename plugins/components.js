import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { XNaiveUIResolver } from '@skit/x.naive-ui/unplugin'

export default () => {
  return Components({
    resolvers: [NaiveUiResolver(), XNaiveUIResolver()]
  })
}
