<template>
  <p>{{ msg }}</p>
  <p>{{ user.name }}{{user.age}}</p>
  <p>{{ count }}</p>
  <button type="button" @click="changeCount">count is: {{ count }}</button>
  <button type="button" @click="upData">更新数据</button>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  let props = defineProps<{ msg: string }>()

  const em = defineEmits(['upData'])
  const upData=()=>{
    em('upData',"子组件传参")
  }
  console.log(props.msg,568);
  const count = ref(0)
  const user = reactive({name:'小刘',age:21})
  let partOneMessage = reactive({
    partOneName:"partOneName",
    partOneMessage:'partOneMessage'
  })
  function changeCount(){
    count.value  = count.value +5
  } 


  defineExpose({
    count,
    partOneMessage
  })
</script>

<style lang="scss" scoped>
</style>
