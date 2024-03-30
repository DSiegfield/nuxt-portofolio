// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      //theme: 'github-light'
      // OR
      theme: {
        // Default theme (same as single string)
        default: "github-light",
        // Theme used if `html.dark`
        dark: "github-dark",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
    },
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
