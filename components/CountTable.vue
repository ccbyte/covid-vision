<template>
  <div style="color:white" class="box-right">
    <table class="table" cellspacing="0" border="1" v-if="area">
      <thead>
        <tr>
          <th>地区</th>
          <th>新增确诊</th>
          <th>累计确诊</th>
          <th>治愈</th>
          <th>死亡</th>
        </tr>
      </thead>
      <transition enter-active-class="animate__animated animate__flipInY">
        <tbody :key="area.name">
          <tr :key="item.name" v-for="(item, index) in area.children">
            <td align="center">{{ item.name }}</td>
            <td align="center">{{ item.today.confirm }}</td>
            <td align="center">{{ item.total.confirm }}</td>
            <td align="center">{{ item.total.heal }}</td>
            <td align="center">{{ item.total.dead }}</td>
          </tr>
        </tbody>
      </transition>
    </table>
  </div>
</template>
  
<script setup lang='ts'>
import 'animate.css'
import type { AreaTree } from '../types'

const props = defineProps<{
  areaDetail: AreaTree
}>()
let area = computed(() => {
  return props.areaDetail
})

</script>
  
<style>
</style>