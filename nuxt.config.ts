// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/color-mode', 'nuxt-icon'],
  css: ['@/assets/styles/index.css'],
  colorMode: {
    preference: 'system',
    dataValue: 'theme',
    classSuffix: '',
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'es',
    langDir: 'locales',
    locales: [
      { code: 'es', iso: 'es-ES', file: 'es.json' },
      { code: 'en', iso: 'en-EN', file: 'en.json' },
    ],
  },
})
