<template>
  <div class="count-menu">
    <section>
      <div>较上日+ {{ chinaDetail.chinaAdd.localConfirmH5 }}</div>
      <div>{{ chinaDetail.chinaTotal.localConfirm }}</div>
      <div>本土现有确诊</div>
    </section>
    <section>
      <div>较上日+ {{ chinaDetail.chinaAdd.nowConfirm }}</div>
      <div>{{ chinaDetail.chinaTotal.nowConfirm }}</div>
      <div>现有确诊</div>
    </section>
    <section>
      <div>较上日+ {{ chinaDetail.chinaAdd.confirm }}</div>
      <div>{{ chinaDetail.chinaTotal.confirm }}</div>
      <div>累计确诊</div>
    </section>
    <section>
      <div>较上日+ {{ chinaDetail.chinaAdd.noInfect }}</div>
      <div>{{ chinaDetail.chinaTotal.noInfect }}</div>
      <div>无症状感染者</div>
    </section>
    <section>
      <div>较上日+ {{ chinaDetail.chinaAdd.importedCase }}</div>
      <div>{{ chinaDetail.chinaTotal.importedCase }}</div>
      <div>境外输入</div>
    </section>
    <section>
      <div>较上日+ {{ chinaDetail.chinaAdd.dead }}</div>
      <div>{{ chinaDetail.chinaTotal.dead }}</div>
      <div>累计死亡</div>
    </section>
  </div>
</template>
  
<script setup lang='ts'>
import { RootObject } from '~~/types';

let { chinaDetail, cityDetail } = useCovData()
const res: RootObject = await $fetch("http://localhost:3333/api/list")
// const { data } = await useAsyncData('count', () => $fetch('http://localhost:3333/api/list'))

chinaDetail = res.diseaseh5Shelf
cityDetail = res.statisGradeCityDetail

</script>
  
<style scoped>
body {
  margin: 0;
  padding: 0;
}

.count-menu {
  color: white;
  background-color: #999;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
}

.count-menu section {
  background: #223645;
  border: 1px solid #212028;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.count-menu section div:nth-child(2) {
  color: #41b0db;
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
}
</style>