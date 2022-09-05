import './lib/yuyuan.scss'
import './index.scss'
import 'github-markdown-css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './components/Router'
import Markdown from './components/Markdown.vue'


const app = createApp(App)
app.use(router)
app.component('Markdown',Markdown)
app.mount('#app')

