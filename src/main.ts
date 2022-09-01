import './lib/yuyuan.scss'
import './index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './components/Router'



const app = createApp(App)
app.use(router)
app.mount('#app')

