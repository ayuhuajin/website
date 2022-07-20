<template>
  <p>{{msg}}</p>
  <!-- <img alt="cat" src="src/assets/cat.png" />
  <img alt="cat" :src="`src/assets/${cat}.png`" /> -->
  <img alt="cat" src="/cat.png" />

  <img alt="cat" :src="cat"/>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import {getList } from '@/api/shop'
  import cat from '@/assets/cat.png'
  let a = getList({})
  let msg = ref("paractice1")
  // let cat = ref('cat')
</script>

<style lang="scss" scoped>
p{
  color: red;
}
img{
  width: 20px;
  height: 20px;
}
</style>
