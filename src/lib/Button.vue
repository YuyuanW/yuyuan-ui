<template>
    <button class="yuyuan-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="yuyuan-loadingIndicator"></span>
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
        },
        level:{
            type:String,
            default:'normal'
        },
        disabled:{
            type:Boolean,
            default:false
        },
        loading:{
            type:Boolean,
            default:false
        }
    },
    setup(props){
        const {theme,size,level}  = props;
        const classes = computed(()=>{
            return {
                [`yuyuan-theme-${theme}`]:theme,
                [`yuyuan-size-${size}`]:size,
                [`yuyuan-level-${level}`]:level,
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
    $red:red;
    $grey:grey;
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

        &.yuyuan-theme-button{
            &.yuyuan-level-main{
                background: $blue;
                color: white;
                border-color: $blue;
                &:hover,
                &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }            
            }

            &.yuyuan-level-danger{
                background: $red;
                color: white;
                border-color: $red;
                &:hover,
                &:focus {
                    background: darken($red, 10%);
                    border-color: darken($red, 10%);
                }            

            }
        }

        &.yuyuan-theme-link{
            &.yuyuan-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &.yuyuan-theme-text{
            &.yuyuan-level-main {
                color: $blue;
                &:hover,
                &:focus {
                    color: darken($blue, 10%);
                }
            }
            &.yuyuan-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &.yuyuan-theme-button {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
                &:hover {
                    border-color: $grey;
                }
            }           
        }

        &.yuyuan-theme-link, &.yuyuan-theme-text {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
            }
        }

        > .yuyuan-loadingIndicator{
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px; 
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            border-width: 2px;
            animation: yuyuan-spin 1s infinite linear;
        }
    }
    @keyframes yuyuan-spin {
    0%{transform: rotate(0deg)} 
    100%{transform: rotate(360deg)} 
    }

</style>