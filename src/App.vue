<script setup>
import { useRoute } from 'vue-router'
import { zhCN, dateZhCN } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#165dff',
    primaryColorHover: '#4080ff',
    primaryColorPressed: '#0d42d2',
    primaryColorSuppl: '#6aa1ff'
  }
}

const route = useRoute()
const layouts = new Map()

function getLayout(name) {
  // 利用map将加载过的layout缓存起来，防止重新加载layout导致页面闪烁
  if (layouts.get(name)) return layouts.get(name)
  const layout = markRaw(defineAsyncComponent(() => import(`~/layout/${name}/index.vue`)))
  layouts.set(name, layout)
  return layout
}

const defaultLayout = 'default'
const Layout = computed(() => {
  if (!route.matched?.length) return null
  return getLayout(route.meta?.layout || defaultLayout)
})
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides" wh-full>
    <router-view v-slot="{ Component, route: curRoute }">
      <component :is="Layout">
        <component :is="Component" :key="curRoute.fullPath" />
      </component>
    </router-view>
  </n-config-provider>
</template>
