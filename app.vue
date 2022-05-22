<template>
  <NuxtLayout>
    <template #header>
      <div class="title">CovidVision</div>
    </template>
    <template #left-side>
      <CountBoard :chinaDetail="chinaDetail" :cityDetail="cityDetail"></CountBoard>
    </template>
    <template #content>
      <Map :chinaDetail="chinaDetail"></Map>
    </template>
    <template #right-side>
      <!-- <CountBoard :chinaDetail="chinaDetail"></CountBoard> -->
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { RootObject } from '~~/types';

useHead({
  title: 'CovidVision',
  description: 'covid-19 vision',
  keywords: 'covid,map,vision,echarts',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
})

let { chinaDetail, cityDetail } = useCovData()
const res: RootObject = await $fetch("http://localhost:3333/api/list")

chinaDetail = res.diseaseh5Shelf
cityDetail = res.statisGradeCityDetail

</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.title {
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
}
</style>