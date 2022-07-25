<template>
  <p>{{msg}}</p>
</template>

<script setup lang="ts">
  import {ref } from 'vue';
  let msg = ref("computed")
</script>

<style lang="scss" scoped>
p{
  color: #999;
}
</style>
