import {createWebHashHistory,createRouter} from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/docComponent/SwitchDemo.vue'
import ButtonDemo from '../components/docComponent/ButtonDemo.vue'
import DialogDemo from '../components/docComponent/DialogDemo.vue'
import TabsDemo from '../components/docComponent/TabsDemo.vue'
import Markdown from '../components/Markdown.vue'
import intro from '../markdown/intro.md'
import install from '../markdown/install.md'
import getStart from '../markdown/get-start.md'

import { h } from 'vue'
const md = (string)=>h(Markdown,{content:string,key:string})

const routes = [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,
      children:[
        {path:'',redirect:'/doc/intro'},
        {path:'intro',component:md(intro)},
        {path:'install',component:md(install)},
        {path:'get-start',component:md(getStart)},
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



