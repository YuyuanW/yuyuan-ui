<template>
    <button><span></span></button>
</template>

<script lang="ts">
export default ({
    name:'Switch'
})
</script>

<style lang="scss" scoped>
    $h : 22px;
    $h2 : $h - 4px;
    button{
        width:$h *2;
        height: $h;
        border:none;
        border-radius: $h/2;
        background: blue;
        position: relative;
        > span{
            position: absolute;
            height:$h2;
            width:$h2;
            background: white;
            border-radius: $h2/2;
            top:2px;
            left:2px;
        }
    }
</style>