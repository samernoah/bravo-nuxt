// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/_main.scss'],

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  components: [
    { path: '~/components', pathPrefix: false },
  ],

  compatibilityDate: '2025-02-15',
  modules: ['@nuxt/fonts'],
});