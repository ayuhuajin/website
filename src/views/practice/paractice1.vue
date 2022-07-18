<template>
  <p>{{msg}}</p>
  <img alt="cat" src="./assets/cat.png" />
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  let msg = ref("paractice1")
</script>

<style lang="scss" scoped>
p{
  color: red;
}
</style>
