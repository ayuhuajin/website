<template>
  <p>{{msg}}</p>
</template>

<script lang="ts" setup>
import { ref,reactive,onMounted,onBeforeMount } from "vue";
let msg = ref('hello world')
let obj = reactive({
    name:'juejin',
    age:3
})
const changeData = () => {
  msg.value = 'hello juejin'
  obj.name = 'hello world'
}
onBeforeMount(()=>{
    console.log('DOM挂载前调用')
  })
  onMounted(()=>{
    console.log('DOM挂载完成调用')
  })
</script>