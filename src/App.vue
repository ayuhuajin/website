<template>
  <!-- <p @click="getExposeData">expose</p>
  <PartOne ref="child" msg="partOne" @up-data="UpData"></PartOne>
  <PartTwo msg="PartTwo" />
  <Practice></Practice>
  <el-button>地方手动阀手动阀</el-button> -->
  <routerView></routerView>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import PartOne from './components/PartOne.vue'
  import PartTwo from './components/PartTwo.vue'
  import Practice from './components/Practice.vue'
  import practiceData from './hooks/practice'
  let data = practiceData()
  const child = ref()
  const UpData = (item:String)=>{
    console.log("获取子组件数据",item)
  }
  const getExposeData = ()=>{
    console.log(child.value.count,child.value.partOneMessage,"获取expose");
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
