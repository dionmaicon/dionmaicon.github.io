// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-graphql-request",
  ],
  css: ["~/assets/main.css"],

  build: {
    transpile: ["nuxt-graphql-request"],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
      appBase: process.env.APP_BASE,
      graphql: {
        /**
         * An Object of your GraphQL clients
         */
        clients: {
          default: {
            /**
             * The client endpoint url
             */
            endpoint: `${process.env.API_BASE}`,
            /**
             * Per-client options overrides
             * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
             */
            options: {},
          },
        },

        /**
         * Options
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
        options: {
          method: "get", // Default to `POST`
        },

        /**
         * Optional
         * default: false (this includes graphql-tag for node_modules folder)
         */
        includeNodeModules: true,
      },
    },
  },

  compatibilityDate: "2025-02-02",
});
