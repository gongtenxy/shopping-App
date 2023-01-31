import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入浏览器统一样式
import 'normalize.css'
// 导入项目通用样式
import './style/base.css'
createApp(App).use(store).use(router).mount('#app')
