// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  compatibilityDate: '2025-07-15',
  css: [
    '~/assets/css/style.css',
    '~/assets/css/tailwind.css'
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {},
  typescript: {
    typeCheck: true
  },
})