<template>
  <p>{{user.name}}</p>
  <p>{{user.age}}</p>

  <p>{{aa.name}}</p>
  <p>{{obj.count}}</p>
</template>

<script setup lang="ts">
  import {reactive,toRef,toRefs } from 'vue';
  interface User {
    name:string,
    age:number
  }
  let user = reactive<User>({
    name:'zhangsan',
    age:112
  })

  // 如果reactive生成的数据如果被展开就失去了响应性
  let aa = {...user}
  console.log(aa,897);

  // toRefs（）函数可以将reactive()创建出来的响应式对象，转换为普通对象，只不过这个对象上的每个属性节点，都是ref响应式数据
  let bb = {...toRefs(user)}
  console.log(bb,78899);
  setTimeout(() => {
    // user.name = 'lisi'
    // aa.name = 'lisi'
    // bb.name.value = 'lisi'
  }, 2000);

  // toRef 
  // 可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。
  const ageRef = toRef(user, 'age')
  ageRef.value ++;
  console.log(user.age,ageRef.value,"两个值一样");

  user.age ++
  console.log(user.age,ageRef.value,"两个值一样");



// 数据如果原始对象是非响应式的就不会更新视图,数据是会变的
  const obj = {
    num:1,
    count:2
  }
  let state = toRef(obj,'count')
  setTimeout(()=>{
    state.value ++ 
  },2000)
  console.log(state.value);
  
  
  
  
</script>

<style lang="scss" scoped>
p{
  color: #999;
}
</style>


<!-- 1、ref是对元数据的拷贝，修改响应式数据时不会影响之前的数据，视图会更新

2、toRef和toRefs是对元数据的引用，修改响应式数据时，元数据也会改变，但是视图不会更新，toRef修改的是对象的某个属性，toRefs修改的是整个对象

3、toRefs的使用场景：如果想让响应式数据和原来的数据关联起来同步更新，并且不更新视图，那么就可以使用toRefs -->