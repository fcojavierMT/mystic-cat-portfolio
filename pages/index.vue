<script setup>
import { ref } from 'vue'
import antonia from '@/assets/images/ilustrations/antonia.jpg'
import remedio from '@/assets/images/ilustrations/remedio.png'
import nice from '@/assets/images/ilustrations/nice.jpg'

import forest from '@/assets/images/ilustrations/forest.png'
import forestCat from '@/assets/images/ilustrations/forestcat.png'
import wolf from '@/assets/images/ilustrations/wolf.jpg'
import StackImages from '~/components/StackImages.vue'

const images = ref([antonia, nice, remedio, forest, wolf, forestCat])
</script>

<template>
  <section class="home-page p-5 flex justify-center flex-col">
    <h1 class="concept-art text-4xl text-center">Concept art</h1>
    <StackImages :images="images" />
  </section>
</template>
