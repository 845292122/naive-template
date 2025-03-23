import { renderIcon } from './icon'
import { BarsOutlined } from '@vicons/antd'

export const RouteUtil = {
  filterPermRoutes: (routes, permissions) => {
    return routes
      .filter(route => {
        // 处理嵌套路由（新增深度拷贝避免污染原始数据）
        if (route.children) {
          const filteredChildren = RouteUtil.filterPermRoutes([...route.children], permissions)
          return filteredChildren.length > 0
        }

        // 更严格的权限检查（必须同时满足以下条件）
        const permRequired = route.meta?.perm
        return !permRequired || permissions.includes(permRequired)
      })
      .map(route => {
        // 创建新对象来保存过滤后的子路由
        return route.children ? { ...route, children: RouteUtil.filterPermRoutes(route.children, permissions) } : route
      })
  },
  transformToMenu: routes => {
    return routes.map(route => {
      // 基础转换
      const menuItem = {
        label: route.meta?.title || '', // 从meta获取标题
        key: route.path, // 使用path作为key
        icon: route.meta.icon ? renderIcon(route.meta.icon) : renderIcon(BarsOutlined) // 保留icon属性
      }

      // 处理嵌套路由
      if (route.children?.length) {
        menuItem.children = RouteUtil.transformToMenu(route.children)

        // 当父路由没有icon时，尝试继承第一个子项的icon
        // if (!menuItem.icon && menuItem.children[0]?.icon) {
        //   menuItem.icon = menuItem.children[0].icon
        // }
      }

      return menuItem
    })
  }
}
