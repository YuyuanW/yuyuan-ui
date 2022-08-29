import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'

import YuYuan from './components/YuYuan.vue'
import YuYuan2 from './components/YuYuan2.vue';


const routes = [
    { path: '/', component: YuYuan },
    { path: '/2', component: YuYuan2 },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

const app = createApp(App)
app.mount('#app')
app.use(router)
