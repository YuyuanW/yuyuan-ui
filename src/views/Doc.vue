<template>
    <div>
        <Topnav></Topnav>
        <div class="content">
            <aside v-if="asideVisible">
                <h2>组件列表</h2>
                <ol>
                    <li><router-link to="/doc/switch">Switch 组件</router-link></li>
                    <li><router-link to="/doc/button">Button 组件</router-link></li>
                    <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
                    <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
                </ol>
            </aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script lang="ts">
import { inject , Ref } from 'vue';
import Topnav from '../components/Topnav.vue';
export default ({
    components:{
        Topnav
    },
    setup(){
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        console.log(asideVisible)
        return {asideVisible}
    }
})
</script>

<style lang="scss" scoped>
    .content{
        /* border:1px solid red; */
        position:relative;
        > aside{
            position:absolute;
            background: lightblue;
            width:50vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding:12px 0;
            >h2{
                padding:4px 0;
            }
            >ol{
                >li{
                    padding:4px 0;
                }
            }
        }
    }
    
</style>