<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <section class="default">
    <Navbar />
    <slot />
    <Footer />
  </section>
</template>

<style>
.default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
