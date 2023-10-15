<script setup>
import antonia from '@/assets/images/ilustrations/antonia.jpg'
import remedio from '@/assets/images/ilustrations/remedio.png'
import nice from '@/assets/images/ilustrations/nice.jpg'

import { ref } from 'vue'

const images = [antonia, nice, remedio]
const styleBg = ref({ backgroundImage: 'url(' + images[0] + ')' })

const cycleImages = (images, step) => {
  images.forEach((image, index) =>
    setTimeout(
      () => {
        styleBg.value = { backgroundImage: 'url(' + image + ')' }
      },
      step * (index + 1),
    ),
  )
  setTimeout(() => cycleImages(images, step), step * images.length)
}

cycleImages(images, 5000)
</script>

<template>
  <section class="p-10">
    <h1 class="text-[24px] mb-10">{{ $t('about.title') }}</h1>
    <h3 class="text-[18px]">{{ $t('about.description') }}</h3>

    <div ref="imageHead" class="mt-10 about-carousel h-[400px] w-full" :style="styleBg"></div>
  </section>
</template>
\

<style>
.about-carousel {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 1s ease-in-out;
}
</style>
