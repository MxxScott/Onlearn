// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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