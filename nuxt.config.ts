// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      // update Nuxt defaults
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },
  runtimeConfig: {

    // public variables (available client-side too)
    public: {
      secureUrlService: process.env.NUXT_PUBLIC_SECURE_URL_SERVICE,
    }
  }
})