import {createWebHashHistory,createRouter} from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/docComponent/SwitchDemo.vue'
import ButtonDemo from '../components/docComponent/ButtonDemo.vue'
import DialogDemo from '../components/docComponent/DialogDemo.vue'
import TabsDemo from '../components/docComponent/TabsDemo.vue'
import DocDemo from '../components/docComponent/DocDemo.vue'
import Markdown from '../components/Markdown.vue'
import { h } from 'vue'
const md = (filename)=>h(Markdown,{path:'../markdown/'+filename+'.md',key:filename})

const routes = [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,
      children:[
        {path:'intro',component:md('intro')},
        {path:'install',component:md('install')},
        {path:'get-start',component:md('get-start')},
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



