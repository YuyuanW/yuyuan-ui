<template>
    <button @click="toggle" :class="{checked : checked}"><span></span></button>
</template>

<script lang="ts">
import { ref } from "vue"
export default ({
    name:'Switch',
    setup(){
        const checked = ref(false)
        const toggle = ()=>{
            checked.value = !checked.value
        }
        return {checked,toggle}
    }
})
</script>

<style lang="scss" scoped>
    $h : 22px;
    $h2 : $h - 4px;
    button{
        width:$h *2;
        height: $h;
        border:none;
        border-radius: $h / 2;
        background: gray;
        position: relative;
        > span{
            position: absolute;
            height:$h2;
            width:$h2;
            background: white;
            border-radius: $h2/2;
            top:2px;
            left:2px;
            transition: left 250ms;
        }
    }
    button.checked{
        background: blue;
        > span {
            left:calc(100% - $h2 - 2px);
        }
    } 

    button:focus{
        outline:none;
    }
</style>