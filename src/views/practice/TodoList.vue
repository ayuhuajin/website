<template>
   <div class="demo4">
    <h3>hook函数：可以抽离一块完整的代码</h3>
    <div>
      <input type="text" v-model="inputValue" @keyup.enter="addItem"/>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <input type="checkbox" v-model="item.status">
        <span>{{item.text}}</span>
        <button @click="removeItem(index)">移除</button>
      </li>
    </ul>
    <div v-if="list.length">{{completeNum}}/{{list.length}}</div>
  </div>
</template>

<script setup lang="ts">
  import useTodoList from '@/hooks/practice/useTodoList';
  const {inputValue,list,completeNum,addItem,removeItem} = useTodoList()

</script>

<style lang="scss" scoped>
p{
  color: #999;
}
</style>
