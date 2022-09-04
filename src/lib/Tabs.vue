<template>
    
    <div class="yuyuan-tabs">
        <div class="yuyuan-tabs-nav">
            <div class="yuyuan-tabs-nav-item" v-for="(t,index) in titles" :key="index" @click="select(t)" :class="{selected:selected === t}">{{t}}</div>
        </div>
        <div class="yuyuan-tabs-content">
            <component class="yuyuan-tabs-content-item" v-for="(c,index) in defaults" :key="index" :is="c" :class="{selected:selected===c.props.title}"></component>
        </div>
    </div>
</template>

<script lang="ts">

export default ({
    name:'Tabs',
    props:{
        selected:{
            type:String,
            default:'导航1'
        }
    },
    setup(props,context){
        const defaults = context.slots.default()
        // console.log(defaults[0].props.title);
        defaults.forEach(element => {
            if(element.type.name !== 'Tab'){
                throw new Error('Tabs的子标签必须为Tab')
            }
        })
        const titles = defaults.map(element => {
            return element.props.title
        });
        const select = (title:string)=>{
            context.emit('update:selected',title)
        }
        
        return {defaults,titles,select}
    }
})
</script>


<style lang="scss">
    $blue:#40a9ff;
    $color:#333;
    $border-color:#d9d9d9;

    .yuyuan-tabs{
        &-nav{
            display:flex;
            color:$color;
            border-bottom:1px solid $border-color;
            &-item{
                padding:8px 0;
                margin:0px 16px;
                cursor: pointer;
                &:first-child{
                    margin-left:0;
                };
                &.selected{
                    color:$blue;
                }
            };
        };
        &-content{
            padding:8px 0;
            &-item{
                display: none;
                &.selected{
                    display: block;
                }
            }
        }
    }

</style>