import { SettingFilled, HomeFilled } from '@vicons/antd'

export const bizRoutes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('~/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: HomeFilled
    }
  },
  {
    name: 'system',
    path: '/system',
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: SettingFilled
    },
    children: [
      {
        name: 'system-tenant',
        path: '/system/tenant',
        component: () => import('~/views/system/tenant/index.vue'),
        meta: {
          title: '租户管理',
          perm: 'system:tenant'
        }
      },
      {
        name: 'system-user',
        path: '/system/user',
        component: () => import('~/views/system/user/index.vue'),
        meta: {
          title: '用户管理',
          perm: 'system:user'
        }
      },
      {
        name: 'system-log',
        path: '/system/log',
        component: () => import('~/views/system/log/index.vue'),
        meta: {
          title: '日志管理',
          perm: 'system:log'
        }
      }
    ]
  }
]
