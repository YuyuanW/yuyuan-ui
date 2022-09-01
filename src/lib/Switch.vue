<template>
    <button @click="toggle" :class="{checked : value}"><span></span></button>
</template>

<script lang="ts">
export default ({
    name:'Switch',
    props:{
        value:Boolean
    },
    setup(props,context){
        const toggle = ()=>{
            context.emit('update:value',!props.value)
        }
        return {toggle}
    }
})
</script>

<style lang="scss">
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