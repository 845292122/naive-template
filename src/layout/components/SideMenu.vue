<script setup>
import { RouteUtil } from '~/utils'
import { useAppStore, useAuthStore } from '~/store'
import { bizRoutes } from '~/router/routes'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const appStore = useAppStore()
const authStore = useAuthStore()
const router = useRouter()

const { perms } = storeToRefs(authStore)

const menuOptions = RouteUtil.transformToMenu(RouteUtil.filterPermRoutes(bizRoutes, perms.value))

function handleMenuSelect(key) {
  router.push(key)
}
</script>

<template>
  <n-menu
    :options="menuOptions"
    accordion
    :collapsed="appStore.menuCollapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :indent="24"
    :width="220"
    @update:value="handleMenuSelect"
  />
</template>
