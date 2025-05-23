// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt'],
  app: {
    head: {
      // update Nuxt defaults
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    }
  },
  runtimeConfig: {

    // public variables (available client-side too)
    public: {
      secureUrlService: process.env.NUXT_PUBLIC_SECURE_URL_SERVICE, 
      authService: process.env.NUXT_PUBLIC_AUTH_SERVICE,
      uploadReviewService:process.env.NUXT_PUBLIC_UPLOAD_REVIEW_SERVICE,
      fetchReviewService:process.env.NUXT_PUBLIC_FETCH_REVIEW_SERVICE,
      profileService:process.env.NUXT_PUBLIC_PROFILE_SERVICE,
      appName:process.env.NUXT_PUBLIC_APP_NAME
    }
  }
})