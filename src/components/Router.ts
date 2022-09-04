import {createWebHashHistory,createRouter} from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/docComponent/SwitchDemo.vue'
import ButtonDemo from '../components/docComponent/ButtonDemo.vue'
import DialogDemo from '../components/docComponent/DialogDemo.vue'
import TabsDemo from '../components/docComponent/TabsDemo.vue'
import DocDemo from '../components/docComponent/DocDemo.vue'
import Intro from '../views/Intro.vue'
import Install from '../views/Install.vue'
import GetStart from '../views/GetStart.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,
      children:[
        {path:'intro',component:Intro},
        {path:'install',component:Install},
        {path:'get-start',component:GetStart},
        {path:'',component:DocDemo},
        {path:'switch',component:SwitchDemo},
        {path:'button',component:ButtonDemo},
        {path:'dialog',component:DialogDemo},
        {path:'tabs',component:TabsDemo},
      ]
    },
]


export  const router = createRouter({
    history: createWebHashHistory(),
    routes,
})



