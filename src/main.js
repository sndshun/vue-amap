import { createApp } from 'vue'
import App from './App.vue'
//引入路由
import router from "./router";

createApp(App)
    .use(router)//使用路由
    .mount('#app')
