<script setup>
import { AccountBookFilled, AimOutlined } from '@vicons/antd'
import { renderIcon } from '~/utils'

const testOptions = [
  {
    label: 'Home',
    key: 'home',
    icon: renderIcon(AccountBookFilled)
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
      }
    ]
  }
]
</script>

<template>
  <!-- <div style="position: relative" h-full>
    <n-layout has-sider wh-full position="absolute">
      <n-layout-sider collapse-mode="transform" :collapsed-width="60" :width="220" show-trigger="bar" bordered>
        <div flex-col>
          <div w-full items-center h-56 flex justify-center>logo</div>
          <n-menu :options="testOptions" />
        </div>
      </n-layout-sider>
      <n-layout position="absolute">
        <n-layout-header h-56>颐和园路</n-layout-header>
        <n-layout-content>
          dsfaksflsafj
          <h1>12sdfsdfsdfsdfdsfdsfdsfdskfaskdjfalsfjlskj3</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div> -->

  <n-layout h-full>
    <n-layout-header style="height: 64px" bordered px-20>
      <div flex justify-between wh-full items-center>
        <!-- TODO logo组件 -->
        <div>TODO: logo</div>
        <!-- TODO action组件 -->
        <div>TODO: action</div>
      </div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px" has-sider>
      <n-layout-sider collapse-mode="transform" :collapsed-width="60" :width="220" show-trigger="bar" bordered>
        <div flex-col>
          <!-- TODO menu组件 -->
          <n-menu :options="testOptions" />
        </div>
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
