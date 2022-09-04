<template>
    <div class="topnavAndBanner">
       <Topnav></Topnav>
        <div class="banner">
            <h1>YuYuanUI</h1>
            <h2>一个厉害的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/YuyuanW/yuyuan-ui">GitHub</a>
                <router-link to="/doc">Start</router-link>
            </p>
        </div>
    </div>
    <div class="yuyuan-icon">
        <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
        </svg>
        <svg class="icon">
            <use xlink:href="#icon-typescript-def"></use>
        </svg>
        <svg class="icon">
            <use xlink:href="#icon-lighting"></use>
        </svg>
    </div>
</template>

<script lang="ts">
// import Vue from 'vue'
import Topnav from '../components/Topnav.vue';
export default ({
    components:{
        Topnav
    }
})
</script>


<style lang="scss" scoped>
    $green:#02bcb0;
    $border-radius:4px;
    $color:rgb(98 147 144);
    .topnavAndBanner{
        clip-path: ellipse(80% 60% at 50% 40%);
        background: linear-gradient(145deg, rgba(0,0,0,1) 0%, rgba(29,29,29,1) 0%, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
    }
    .banner{
        color:$color;
        /* border:1px solid red; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;

        padding:100px 0;

        /* background: lightgreen; */

        > .actions{
            padding: 8px 0;
            a {

                margin:0 8px;
                background: $green;
                color:white;
                display: inline-block;
                $h: 28px;
                border-radius: $border-radius;
                padding: 8px 24px;
                &:hover{
                    text-decoration: none;
                }
            }
        }


    }

    .yuyuan-icon{
        >.icon{
            width: 64px; 
            height: 64px;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
    }
</style>