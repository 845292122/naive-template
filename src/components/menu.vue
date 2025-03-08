<script setup>
import { useAppStore, useAuthStore } from '~/store'
import { storeToRefs } from 'pinia'
import MenuItem from './menu-item'

// TODO 测试用,待删除
import { bizRoutes } from '~/router/routes'
const authStore = useAuthStore()
const appStore = useAppStore()

// const { permRoutes } = storeToRefs(authStore)

const permRoutes = bizRoutes
</script>

<template>
  <!-- TODO 转换菜单 items -->
  <a-menu mode="inline" theme="dark"> </a-menu>
</template>
