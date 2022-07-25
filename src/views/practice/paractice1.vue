<template>
  <p>{{msg}}</p>
  <!-- <img alt="cat" src="src/assets/cat.png" />
  <img alt="cat" :src="`src/assets/${cat}.png`" /> -->
  <img alt="cat" src="/cat.png" />
  <img alt="cat" :src="cat"/>
  <div class="bg">背景色</div>
</template>

<script setup lang="ts">
  import { reactive, ref, getCurrentInstance } from 'vue';
  import {getList } from '@/api/shop'
  import cat from '@/assets/cat.png'
  let a = getList({})
  let msg = ref("paractice1")
  // let cat = ref('cat')
  // mounted() {
  //   console.log(this.foo) // 'bar'
  // }
  let obj =  getCurrentInstance()
  console.log(obj,8989);
  
  // console.log($global,7897987)
  
</script>

<style lang="scss" scoped>
p{
  color: #999;
}
img{
  width: 20px;
  height: 20px;
}
.bg{
  width: 120px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  color: white;
  // background: url('../../assets/cat.png');
  background: url('@/assets/cat.png');
}
</style>
