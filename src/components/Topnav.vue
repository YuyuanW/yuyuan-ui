<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon" >
        <use xlink:href="#icon-king"></use>
    </svg>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">首页</router-link>
      </li>
    </ul>
    <!-- <span class="toggleAside" @click="toggleAside"> -->
      <svg v-if='iconAsideVisible' class="toggleAside" @click="toggleAside" >
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    <!-- </span> -->
  </div>
</template>

<script lang="ts">
import { inject,Ref } from "vue"
export default ({
    name:'Topnav',
    setup(){
        let asideVisible = inject<Ref<boolean>>('asideVisible') !
        const toggleAside = ()=>{
            asideVisible.value = !asideVisible.value
        }
        console.log(asideVisible)
        return {toggleAside}
    },
    props:{
        iconAsideVisible : {
          type:Boolean,
          default:false
        }
    }
})
</script>

<style lang="scss" scoped>
  $color:rgb(98 147 144);
.topnav {
  /* background: pink; */
  color:$color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >.icon{
      width: 2em; 
      height: 2em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    
      width:32px ;
      height:32px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>