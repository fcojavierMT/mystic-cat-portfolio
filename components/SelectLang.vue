<script setup>
import { Icon } from '#components'
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLink
    class="flex items-center"
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
  >
    <Icon class="cursor-pointer ml-2 mr-2" size="20" name="ic-baseline-language" />
    {{ locale.name }}
    <Icon class="cursor-pointer ml-2 mr-2" size="20" name="gg-select" />
  </NuxtLink>
</template>
