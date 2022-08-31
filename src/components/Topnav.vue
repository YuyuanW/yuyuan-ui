<template>
     <div class="position">
         <div class="topnav">
                <div class="logo" >LOGO</div>
                <ul class="menu">
                    <li>菜单1</li>
                    <li>菜单2</li>
                </ul>
                <span class="toggleAside" @click="toggleAside"></span>
            </div>
     </div>
</template>

<script lang="ts">
import { inject,Ref,ref } from "vue"
export default ({
    name:'Topnav',
    setup(){
        let asideVisible = inject<Ref<boolean>>('asideVisible') !
        const toggleAside = ()=>{
            asideVisible.value = !asideVisible.value
        }
        return {toggleAside}
    }
})
</script>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    > .logo {
        max-width: 6em;
        margin-right: auto;

    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
        margin: 0 1em;
        }
    }
    .toggleAside{
        display: none;
        width:24px;
        height: 24px;
        left:16px;
        top:50%;
        background: red;
        position:absolute;
        transform:translateY(-50%); 
    }
    @media (max-width: 500px){
        .menu{
            display: none;
        }
        .logo{
            justify-content: center;
            align-items: center ;
            margin:0 auto;
        }
        .toggleAside{
            display: inline-block;
        }
    }
}
</style>