<template>
  <div>{{ addSum }}</div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
const a = ref(1)
const b = ref(2)
let addSum = computed(() => {
  return a.value + b.value
})
watch(a, (newValue, oldValue) => {
  console.log(`a从${oldValue}变成了${newValue}`)
})
</script>
