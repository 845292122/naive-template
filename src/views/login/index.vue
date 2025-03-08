<script setup>
import loginIll from '~/assets/login/login-ill.svg'
import LoginBg from './login-bg.vue'
import loginForm from './login-form.vue'
</script>

<template>
  <div wh-full flex>
    <div min-w-800 min-h-400 m-a card-shadow bg-white flex z-1000>
      <div class="login-illustration" flex justify-center items-center flex-1>
        <img w-280 :src="loginIll" alt="login-ill" />
      </div>
      <div flex-1>
        <loginForm />
      </div>
    </div>
    <LoginBg />
  </div>
</template>

<style lang="less" scoped>
.login-illustration {
  background: rgb(0, 78, 167);
  background: linear-gradient(39deg, rgba(0, 78, 167, 1) 0%, rgba(2, 119, 252, 1) 29%, rgba(178, 214, 255, 1) 100%);
}
</style>
