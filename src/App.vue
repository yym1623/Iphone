<script setup>
import { defineAsyncComponent, ref } from 'vue' 

const Iphone = defineAsyncComponent(() => import('./components/Iphone.vue'))


</script>

<template>
  <Iphone />
</template>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
</style>