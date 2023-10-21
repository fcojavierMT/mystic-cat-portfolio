<script setup>
if (!localStorage.getItem('nuxt-color-mode')) {
  localStorage.setItem('nuxt-color-mode', 'dark')
}
const switchLocalePath = useSwitchLocalePath()

switchLocalePath('es')
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
