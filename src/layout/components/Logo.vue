<script setup>
import Logo from '~/assets/vue.svg'

const title = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <div flex items-center>
    <img :src="Logo" alt="logo" mr-7 />
    <n-gradient-text type="primary" size="18"> {{ title }} </n-gradient-text>
  </div>
</template>
