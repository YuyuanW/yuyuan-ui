import { createApp } from 'vue'
import App from './App.vue'
import { router } from './components/Router'
import './index.scss'


const app = createApp(App)
app.use(router)
app.mount('#app')

