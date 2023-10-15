<script setup lang="ts">
useHead({
  title: 'Mystic Cat',
  meta: [{ name: 'description', content: 'Mystic Cat page!' }],
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
