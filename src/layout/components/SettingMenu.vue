<script setup>
import { Icon } from '@vicons/utils'
import { CaretDownOutlined, UserOutlined, ProfileTwotone, LogoutOutlined } from '@vicons/antd'
import { renderIcon } from '~/utils'

const options = ref([
  {
    label: '账户资料',
    key: 'info',
    icon: renderIcon(ProfileTwotone, { size: 18 })
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutOutlined, { size: 18 })
  }
])
</script>

<template>
  <n-dropdown trigger="hover" :options="options">
    <div flex>
      <n-button text>
        <template #icon>
          <Icon size="24">
            <UserOutlined />
          </Icon>
        </template>
        用户名思密达
        <Icon>
          <CaretDownOutlined />
        </Icon>
      </n-button>
    </div>
  </n-dropdown>
</template>
