<script setup>
import SideMenu from '../components/SideMenu'
import Logo from '../components/Logo.vue'
import { useAppStore } from '~/store'

const appStore = useAppStore()
</script>

<template>
  <n-layout h-full>
    <n-layout-header style="height: 64px" bordered px-20>
      <div flex justify-between wh-full items-center>
        <Logo />
        <!-- TODO action组件 -->
        <div>TODO: action</div>
      </div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px" has-sider>
      <n-layout-sider
        :width="220"
        show-trigger="true"
        bordered
        collapse-mode="width"
        :collapsed="appStore.menuCollapsed"
        :collapsed-width="64"
        :collapsed-icon-size="20"
        @update:collapsed="appStore.toggleMenuCollapsed"
      >
        <SideMenu />
      </n-layout-sider>

      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
      </n-layout>
    </n-layout>
  </n-layout>
</template>
