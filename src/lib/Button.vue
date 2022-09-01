<template>
    <div v-bind="rest" :size='size'>
        <button  @onmouseover ="onMouseover">
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
export default{
    name:'Button' ,
    inheritAttrs:false,
    setup(props,context){
        const {size,onMouseover,...rest} = context.attrs
        return {size,onMouseover,rest}

    }
}
</script>

<style lang="scss" scoped>
    div{
        border:1px solid red;
    }
</style>