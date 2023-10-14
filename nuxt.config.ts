// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
  css: ['@/assets/styles/index.css'],
  colorMode: {
    preference: 'system',
    dataValue: 'theme',
    classSuffix: '',
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
  },
})
