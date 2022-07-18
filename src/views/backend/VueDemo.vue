<template>
  <p>{{ msg }}</p>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';

  let msg = ref("vueDemo")
</script>

<style lang="scss" scoped>
</style>
