<template>
  <p>{{msg}}</p>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  let msg = ref("paractice2")
</script>

<style lang="scss" scoped>
p{
  color: red;
}
</style>
