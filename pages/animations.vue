<script setup>
import final from '@/assets/images/animations/final.mp4'
</script>

<template>
  <section class="hero min-h-screen">
    <div class="hero-content flex-col">
      <h1 class="text-3xl">Work in progress!</h1>
      <video controls autoplay>
        <source :src="final" type="video/mp4" />
      </video>
    </div>
  </section>
</template>
