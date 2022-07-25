import { computed, reactive, ref } from "vue"

const useTodoList = () => {
  const inputValue = ref('');
  const list = reactive([{
    text: '吃饭',
    status: false,
  },
  {
    text: '睡觉',
    status: true,
  },
  {
    text: '打豆豆',
    status: false,
  },]);
  
  const completeNum = computed(()=> {
    const completeList = list.filter(item => {
      return item.status
    })
    return completeList.length
  })
  const addItem = () => {
    if(inputValue.value === '') {
      return
    }
    list.push({
      text: inputValue.value,
      status: false,
    })
    inputValue.value = ''
  }
  const removeItem = (index) => {
    list.splice(index, 1)
  }

  return{
    inputValue,
    list,
    completeNum,
    addItem,
    removeItem,
  }
}

export default useTodoList