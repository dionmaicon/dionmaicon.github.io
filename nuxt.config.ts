// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
      '@nuxt/devtools',
      '@nuxtjs/tailwindcss',
      "@nuxtjs/color-mode",
  ],
  css: [
    '~/assets/main.css'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:8080/wp-json/wp/v2'
    }
  },
})