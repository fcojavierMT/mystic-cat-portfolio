<script setup>
import antonia from '@/assets/images/ilustrations/antonia.jpg'
import remedio from '@/assets/images/ilustrations/remedio.png'
import nice from '@/assets/images/ilustrations/nice.jpg'

import forest from '@/assets/images/ilustrations/forest.png'
import forestCat from '@/assets/images/ilustrations/forestcat.png'
import wolf from '@/assets/images/ilustrations/wolf.jpg'

const images = [antonia, nice, remedio, forest, wolf, forestCat]
</script>

<template>
  <section class="home-page">
    <section class="flex flex-row justify-center flex-wrap">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        class="w-80 h-56 m-4 rounded-xl"
      />
    </section>
  </section>
</template>
