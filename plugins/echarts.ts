// import Vue from 'vue'
// import echarts from 'echarts' // 引入echarts
// Vue.prototype.$echarts = echarts // 引入组件（将echarts注册为全局）

// plugins/chart.js
import * as echarts from 'echarts'; // echarts 按需引入

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$echarts = echarts
});