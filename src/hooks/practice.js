import { reactive,computed } from 'vue';

export default function(){
  const data = reactive({
    course:'js',
    skill:"css"
  })
  // 方法
  const changeCourse = (event)=>{
    data.course = 'java'
  } 
  // 计算属性
  const doubleCourse = computed(()=>{
    data.course + 'English'
  })
  return {
    data,
    changeCourse,
    doubleCourse
  }
}
