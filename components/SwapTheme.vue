<script setup>
const colorMode = useColorMode()

const themes = ['light', 'dark']
</script>

<template>
  <div class="p-2 flex gap-4">
    <select class="select select-bordered w-full max-w-xs" v-model="colorMode.preference">
      <option disabled selected>Theme</option>
      <option v-for="theme of themes" :key="theme">{{ theme }}</option>
    </select>
  </div>
</template>
