<script setup>
import SideMenu from '../components/SideMenu'
import Logo from '../components/Logo.vue'
import SettingMenu from '../components/SettingMenu'
import Notice from '../components/Notice.vue'
import { useAppStore } from '~/store'

const appStore = useAppStore()
</script>

<template>
  <n-layout h-full>
    <n-layout-header style="height: 64px" bordered px-20>
      <div flex justify-between wh-full items-center>
        <Logo />
        <div flex>
          <div mr-20>
            <Notice />
          </div>
          <SettingMenu />
        </div>
      </div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px" has-sider>
      <n-layout-sider
        :width="220"
        show-trigger="bar"
        bordered
        collapse-mode="width"
        :collapsed="appStore.menuCollapsed"
        :collapsed-width="64"
        :collapsed-icon-size="20"
        @update:collapsed="appStore.toggleMenuCollapsed"
      >
        <SideMenu />
      </n-layout-sider>

      <n-layout content-style="padding: 16px;" :native-scrollbar="false" style="background-color: #f2f3f5">
        <slot />
      </n-layout>
    </n-layout>
  </n-layout>
</template>
