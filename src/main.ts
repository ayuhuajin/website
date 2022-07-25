import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import router from '@/router'
import axios from "@/http/http";
import '@/assets/css/reset.css'

const app = createApp(App)

console.log(app.config,"每个 Vue 应用都会暴露一个包含其配置项的 config 对象")
app.config.globalProperties.$axios=axios;  
app.config.globalProperties.$global="this is a global";  

app.use(router)
app.use(ElementPlus)
app.mount('#app')
