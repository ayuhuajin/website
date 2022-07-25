<template>
  <p>{{msg}}</p>
</template>

<script setup lang="ts">
  import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue';
  let msg = ref("demo")
  onBeforeMount(()=>{
    console.log('DOM挂载前调用')
  })
  onMounted(()=>{
    console.log('DOM挂载完成调用')
  })
  onBeforeUpdate(()=>{
    console.log('数据更新之前被调用')
  })
  onUpdated(()=>{
    console.log('数据更新之后被调用')
  })
  onBeforeUnmount(()=>{
    console.log('组件销毁前调用')
  })
  onUnmounted(()=>{
    console.log('组件销毁完成调用')
  })
</script>

<style lang="scss" scoped>
p{
  color: #999;
}
</style>
