<script setup>
import { useAppStore } from '~/store'

const appStore = useAppStore()
</script>

<template>
  <div wh-full flex>
    <div flex-col flex-shrink-0 transition-width-300 :class="appStore.menuCollapsed ? 'w-64' : 'w-220'" class="aside-wrapper">
      <!-- <Sidebar /> -->
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.aside-wrapper {
  box-shadow: 1px 0 5px 1px rgba(0, 0, 0, 0.3);
  background-color: #001628;
  border-right: 1px solid #001628;
}
</style>
