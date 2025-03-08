export const bizRoutes = [
  {
    name: 'system',
    path: '/system',
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: 'bi:gear-fill'
    },
    children: [
      {
        name: 'system-tenant',
        path: '/system/tenant',
        component: () => import('~/views/system/tenant/index.vue'),
        meta: {
          title: '租户管理',
          icon: 'bi:person-vcard-fill',
          perm: 'system:tenant'
        }
      },
      {
        name: 'system-user',
        path: '/system/user',
        component: () => import('~/views/system/user/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'bi:shield-lock-fill',
          perm: 'system:user'
        }
      },
      {
        name: 'system-log',
        path: '/system/log',
        component: () => import('~/views/system/log/index.vue'),
        meta: {
          title: '日志管理',
          icon: 'bi:person-circle',
          perm: 'system:log'
        }
      }
    ]
  }
]
