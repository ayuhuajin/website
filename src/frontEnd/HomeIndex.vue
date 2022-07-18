<template>
  <p>{{ msg }}</p>
</template>

<script setup lang="ts" setup>
  import { reactive, ref } from 'vue';

  let msg = ref("ceshi")
</script>

<style lang="scss" scoped>
</style>
