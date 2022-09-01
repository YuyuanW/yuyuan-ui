<template>
    <button class="yuyuan-button" :class="classes">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'

export default{
    name:'Button',
    props:{
        theme:{
            type:String,
            default:'button'
        },
        size:{
            type:String,
            default:'normal'
        }
    },
    setup(props){
        const {theme,size}  = props;
        const classes = computed(()=>{
            return {
                [`yuyuan-theme-${theme}`]:theme,
                [`yuyuan-size-${size}`]:size
            }
        })
        return {classes}
    }
}
</script>

<style lang="scss">
    $h:32px;
    $border-color:#d9d9d9;
    $color:#333;
    $radius:4px;
    $blue:#40a9ff;
    .yuyuan-button{
        box-sizing:border-box;
        height:$h;
        padding:0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color:$color;
        border:1px solid $border-color;
        border-radius:$radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);

        & + & {
            margin-left:8px;
        }

        &:hover,&:focus{
            color:$blue;
            border-color:$blue;
        }
        &:focus{
            outline:none
        }
        &::-moz-focus-inner{
            border:0;
        }
        &.yuyuan-theme-link{
            background: none;
            border-color: transparent;
            box-shadow: none;
            color: $blue;
            &:hover,&:focus{
            color: lighten($blue, 10%);
            }
        }
        &.yuyuan-theme-text{
            background: none;
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,&:focus{
            background: darken(white, 5%);;
            }
        }

        &.yuyuan-theme-button{
            &.yuyuan-size-big{
                font-size: 24px;
                height: 48px;
                padding: 0 16px
            }
            &.yuyuan-size-small{
                font-size: 12px;
                height: 20px;
                padding: 0 4px;
            }
        }
    }

    


</style>