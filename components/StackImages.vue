<script setup>
import { ref } from 'vue'
import { Icon } from '#components'

const currentImages = ref([])

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
})

const goNext = () => {
  currentImages.value.push(currentImages.value.shift())
}

currentImages.value = [...props.images]
</script>

<template>
  <p class="text-click text-center mt-20 text-2xl">
    Click me! <Icon class="icon bounce" size="30" name="tdesign-gesture-click" />
  </p>
  <div class="stack">
    <img
      v-for="(image, index) in currentImages"
      :key="index"
      :src="image"
      class="w-full h-auto m-4 rounded-xl min-h-[250px] max-h-[250px] max-w-[350px] sm:min-h-[500px] sm:max-w-[700px] cursor-pointer"
      @click="goNext"
    />
  </div>
</template>

<style>
.bounce {
  animation: bounce 2s infinite;
  transform: rotate(45deg);
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) rotate(-35deg);
  }
  40% {
    transform: translateY(-10px) rotate(-35deg);
  }
  60% {
    transform: translateY(-15px) rotate(-35deg);
  }
}
</style>
