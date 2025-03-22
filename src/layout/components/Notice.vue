<script setup>
import { Icon } from '@vicons/utils'
import { BellOutlined } from '@vicons/antd'

const options = ref([
  {
    label: '账户资料',
    key: 'info'
  },
  {
    type: 'divider',
    key: 'd1'
  }
])
</script>

<template>
  <x-n-dropdown placement="bottom-end">
    <template #trigger>
      <n-button tertiary circle>
        <template #icon>
          <Icon>
            <BellOutlined />
          </Icon>
        </template>
      </n-button>
    </template>

    <n-tabs default-value="notice" justify-content="space-evenly" type="segment" min-w-6xl px-15 py-5>
      <n-tab-pane name="notice" tab="通知"> 通知 </n-tab-pane>
      <n-tab-pane name="message" tab="消息"> 消息 </n-tab-pane>
    </n-tabs>
  </x-n-dropdown>
</template>
