<script setup>
import { Icon } from '#components'
import { SOCIALS } from '@/constants/Socials'
</script>

<template>
  <footer class="social-media mt-auto flex items-center justify-center mb-4">
    <hr class="bg-white w-[20px]" />

    <a v-for="(social, index) in SOCIALS" :key="index" :href="social.link">
      <Icon class="cursor-pointer ml-2 mr-2" size="30" :name="social.icon" />
    </a>

    <hr class="bg-white w-[20px]" />
  </footer>
</template>
