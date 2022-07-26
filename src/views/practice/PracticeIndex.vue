<template>
  <!-- <div class="header">标题</div> -->
  <el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick" class="demo-tabs">
    <el-tab-pane v-for="(item,index) in list" :key="index" :label="item.label" :name="item.name">
      <!-- <component :is="currentComp?demo1:demo2"> </component> -->
      <keep-alive>
        <component v-if="item.name ==activeName" :is="currentComp" :key="currentComp"></component>
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
  <!-- <div class="footer">底部</div> -->

  <!-- 传送门功能 -->
  <!-- 在一些场景中，比如使用modal时，我们想要将modal放在具体的vue页面中，功能与位置保持一致。
  但是在展示时，又希望直接将它放在body下，方便实现定位样式。面对功能位置与样式位置的不统一，
  vue3中提供一对<teleport ></teleport>标签用于移动dom的位置到指定元素。 -->

  <!-- <teleport to="body">
    <demo3></demo3>
  </teleport> -->
</template>
<script lang="ts" setup>
import { reactive, ref, shallowRef,onActivated,onDeactivated,onErrorCaptured,onRenderTracked,onRenderTriggered } from 'vue'
import demo1 from '@/views/practice/WatchDemo.vue'
import demo2 from '@/views/practice/ComputedDemo.vue'
import demo3 from '@/views/practice/TeleportDemo.vue'
import demo4 from '@/views/practice/TodoList.vue'
import demo5 from '@/views/practice/RefDemo.vue'
import demo6 from '@/views/practice/ReactiveDemo.vue'
import demo7 from '@/views/practice/LifeStyle.vue'
  let activeName = ref("demo7")

  // Vue3中使用component :is 加载组件
  // 1.不使用setup语法糖，这种方式和vue2差不多，is可以是个字符串
  // 2. 使用setup语法糖，这时候的is如果使用字符串会加载不出来，得使用组件实例 

  //这里用ref的话，vue给出警告Vue接收到一个组件，该组件被制成反应对象。
  // 这可能会导致不必要的性能开销，应该通过将组件标记为“markRaw”或使用“shallowRef”而不是“ref”来避免。
  // 如果使用 markRaw 那么currentComp将不永远不会再成为响应式对象。 所以得使用 shallowRef
  let currentComp = shallowRef(demo7)
  const tabPosition = ref('left')
  let list = reactive([
    {
      index:1,
      name:'demo1',
      label:"监听属性",
    },
    {
      index:2,
      name:'demo2',
      label:"计算属性",
    },
    {
      index:3,
      name:'demo3',
      label:"传送门",
    },
    {
      index:4,
      name:'demo4',
      label:"TodoList",
    },
    {
      index:5,
      name:'demo5',
      label:"ref使用",
    },
    {
      index:6,
      name:'demo6',
      label:"reactive使用",
    },
    {
      index:7,
      name:'demo7',
      label:"生命周期",
    }
  ])
  onErrorCaptured(() => {
    console.log('后代组件发生错误时触发')
  })
  onRenderTracked(() => {
    console.log('VUE 3 中才能够使用，渲染期间首次跟踪依赖时触发，多用于调试')
  })
  onRenderTriggered(() => {
    console.log('VUE 3 中才能够使用，触发新渲染时调用，多用于调试')
  })

  function handleClick(tab: any, event: any) {
    switch(tab.paneName) {
      case 'demo1':
        currentComp.value = demo1;
        break;
      case 'demo2':
        currentComp.value = demo2;
        break;
      case 'demo3':
        currentComp.value = demo3;
        break;
      case 'demo4':
        currentComp.value = demo4;
        break;
      case 'demo5':
        currentComp.value = demo5;
        break;
      case 'demo6':
        currentComp.value = demo6;
        break;
      case 'demo7':
        currentComp.value = demo7;
        break;
    }
  }
</script>
<style lang="scss" scoped>
.header,.footer{
  height: 60px;
  background: #f5f5f5;
}
.demo-tabs{
  height: calc(100vh - 120px);
  overflow: auto;
}
.demo-tabs > .el-tabs__content {
  color: #6b778c;
  padding: 15px;
  font-weight: 600;
  height: calc(100vh - 120px);
  overflow: auto;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>


<!-- 报错TypeError: parentComponent.ctx.deactivate is not a function
解决方法: 在keep-alive、component上设置key进行排序(即加个key) -->

