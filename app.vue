<script setup lang="ts">
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'

useHead({
  title: 'Mystic Cat',
  meta: [{ name: 'description', content: 'My personal portfolio' }],
})

onMounted(() => {
  themeChange(false)
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
