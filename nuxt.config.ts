import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false, // 优化类型提示
  },
  // plugins: ["~plugins/echarts"],
  build: {
    transpile: ["echarts"],
  },
})
