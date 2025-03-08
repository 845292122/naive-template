import IconsResolver from 'unplugin-icons/resolver'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default () => {
  return Components({
    // ? fix bug：https://github.com/vueComponent/ant-design-vue/issues/7280#issuecomment-2126196088
    resolvers: [AntDesignVueResolver({ cjs: true, importStyle: 'less', resolveIcons: true }), IconsResolver()]
  })
}
