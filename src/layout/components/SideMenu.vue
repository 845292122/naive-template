<script setup>
import { AccountBookFilled, AimOutlined } from '@vicons/antd'
import { renderIcon } from '~/utils'
import { useAppStore } from '~/store'

const appStore = useAppStore()

// TODO 侧边栏测试数据
const testOptions = [
  {
    label: 'Home',
    key: 'home',
    icon: renderIcon(AccountBookFilled)
  },
  {
    label: 'Test',
    key: 'test1',
    icon: renderIcon(AimOutlined),
    children: [
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      }
    ]
  },
  {
    label: 'Test',
    key: 'test',
    icon: renderIcon(AimOutlined),
    children: [
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test1',
        key: 'test1'
      },
      {
        label: 'Test2',
        key: 'test2'
      },
      {
        label: 'Test1',
        key: 'test1'
      }
    ]
  }
]
</script>

<template>
  <n-menu
    :options="testOptions"
    accordion
    :collapsed="appStore.menuCollapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :indent="24"
    :width="220"
  />
</template>
