<script setup>
import { IdcardFilled, LockFilled, WechatFilled } from '@vicons/antd'
import { Icon } from '@vicons/utils'

const formRef = ref()
const formValue = ref({
  phone: '',
  password: '',
  rememberMe: false
})
const rules = []
</script>

<template>
  <div flex justify-center items-center h-full w-full>
    <n-form ref="formRef" :model="formValue" :rules="rules" label-placement="top" :show-label="false" w-7xl>
      <h2 mb-20 text-20>欢迎使用</h2>
      <n-form-item label="手机号" path="phone">
        <n-input v-model:value="formValue.phone" placeholder="请输入手机号">
          <template #prefix>
            <Icon size="18">
              <IdcardFilled />
            </Icon>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input v-model:value="formValue.password" placeholder="请输入密码" type="password" show-password-on="mousedown">
          <template #prefix>
            <Icon size="18">
              <LockFilled />
            </Icon>
          </template>
        </n-input>
      </n-form-item>
      <n-tooltip trigger="hover" placement="right-end">
        <template #trigger>
          <n-checkbox v-model:checked="formValue.rememberMe">记住我</n-checkbox>
        </template>
        保存账号密码30天
      </n-tooltip>
      <n-button attr-type="button" block type="primary" mt-5> 登 录 </n-button>
      <n-divider>其他登录方式</n-divider>
      <n-button attr-type="button" block mt-10>
        <template #icon>
          <Icon color="green">
            <WechatFilled />
          </Icon>
        </template>
        通过微信登录
      </n-button>
    </n-form>
  </div>
</template>
