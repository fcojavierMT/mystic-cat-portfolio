// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/color-mode', 'nuxt-icon'],
  css: ['@/assets/styles/index.css'],
  colorMode: {
    preference: 'dark',
    dataValue: 'theme',
    classSuffix: '',
  },
  i18n: {
    defaultLocale: 'es',
    langDir: 'locales',
    locales: [
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'ES' },
      { code: 'en', iso: 'en-EN', file: 'en.json', name: 'EN' },
    ],
  },
  ssr: false,
  nitro: {
    preset: 'node-server',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Mystic Cat',
      meta: [
        {
          name: 'description',
          content: 'This is the personal portofolio for Ana Maria Martinez Talavera',
        },
      ],
    },
  },
})
