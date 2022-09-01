import {createWebHashHistory,createRouter} from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/docComponent/SwitchDemo.vue'
import ButtonDemo from '../components/docComponent/ButtonDemo.vue'
import DialogDemo from '../components/docComponent/DialogDemo.vue'
import TabsDemo from '../components/docComponent/TabsDemo.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,
      children:[
        {path:'switch',component:SwitchDemo},
        {path:'button',component:ButtonDemo},
        {path:'Dialog',component:DialogDemo},
        {path:'switch',component:TabsDemo},
      ]
    },
  ]

export  const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

