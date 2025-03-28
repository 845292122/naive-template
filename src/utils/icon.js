import { NIcon } from 'naive-ui'

export function renderIcon(icon, props = {}) {
  return () => h(NIcon, props, { default: () => h(icon) })
}
