// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',   // if deploying to a subfolder, set it (e.g. '/my-app/')
    buildAssetsDir: '/_nuxt/', // default, don’t remove
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