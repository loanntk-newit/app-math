import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  },

  css: ["@/assets/css/styles.css"],
  
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
