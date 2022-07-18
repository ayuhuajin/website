<template>
  <p>{{msg}}</p>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  let msg = ref("paractice")
</script>

<style lang="scss" scoped>
</style>
