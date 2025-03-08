<script setup>
import { useAuthStore } from '~/store'
import { _localStorage, jscrypt } from '~/utils'
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const PHONE_KEY = 'login-phone'
const PWD_KEY = 'login-pwd'
const REM_KEY = 'login-rem'
const EXPIRE_MS = 30 * 24 * 60 * 60 * 1000

const loginRef = ref()
const title = import.meta.env.VITE_APP_TITLE
const loginForm = ref({
  phone: '',
  password: '',
  rememberMe: true
})
const loading = ref(false)
const loginRules = {
  phone: [{ required: true, trigger: 'blur', message: '请输入手机号' }],
  password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
}
</script>

<template>
  <div flex justify-center items-center h-full>
    <a-form ref="loginRef" :model="loginForm" :rules="loginRules" w-full p-60>
      <h2 text-center mb-20 text-20>{{ title }}</h2>
      <a-form-item name="phone">
        <a-input v-model:value="loginForm.phone" placeholder="手机号">
          <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>
      <a-form-item name="password" type="password">
        <a-input v-model:value="loginForm.password" placeholder="密码">
          <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
      </a-form-item>
      <a-tooltip placement="right">
        <template #title>保存账号密码30天</template>
        <a-checkbox v-model="loginForm.rememberMe">记住密码</a-checkbox>
      </a-tooltip>
      <a-form-item mt-5>
        <a-button type="primary" block>登 录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
