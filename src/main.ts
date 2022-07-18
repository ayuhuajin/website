import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import axios from "./http/http.js";
import './assets/css/reset.css'



const app = createApp(App)
app.config.globalProperties.$axios=axios;  

app.use(router)
app.use(ElementPlus)
app.mount('#app')
