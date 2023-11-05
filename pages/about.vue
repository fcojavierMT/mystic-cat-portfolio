<script setup>
import me from '@/assets/images/me.jpg'
</script>

<template>
  <section class="hero min-h-screen">
    <div class="hero-content flex-col">
      <img :src="me" class="max-w-[300px] rounded-lg shadow-2xl mb-8" />
      <div>
        <h1 class="text-3xl font-bold">{{ $t('about.title') }}</h1>
        <p class="py-6">
          {{ $t('about.description') }}
        </p>
      </div>
    </div>
  </section>
</template>
