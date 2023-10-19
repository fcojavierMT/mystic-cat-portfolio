<script setup>
import { Icon } from '#components'

const links = [
  {
    icon: 'uil-twitter',
    link: 'https://twitter.com/AnitaMystic',
  },
  {
    icon: 'ic-baseline-tiktok',
    link: 'https://www.tiktok.com/@sr.mysticcat',
  },
  {
    icon: 'ri-facebook-fill',
    link: 'https://www.facebook.com/profile.php?id=100006310087871',
  },
  {
    icon: 'ic-baseline-telegram',
    link: 'https://t.me/Mystic_Universe',
  },
  {
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/in/ana-mar%C3%ADa-mart%C3%ADnez-talavera-aab61b222/',
  },
]
</script>

<template>
  <footer class="social-media mt-auto flex items-center justify-center mb-4">
    <hr class="bg-white w-[20px]" />

    <a v-for="(social, index) in links" :key="index" :href="social.link">
      <Icon class="cursor-pointer ml-2 mr-2" size="30" :name="social.icon" />
    </a>

    <hr class="bg-white w-[20px]" />
  </footer>
</template>
