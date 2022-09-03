<template>
    
    <div class="yuyuan-tabs">
        <div class="yuyuan-tabs-nav">
            <div class="yuyuan-tabs-nav-item" v-for="(t,index) in titles" :key="index" >{{t}}</div>
        </div>
        <div class="yuyuan-tabs-content">
            <component class="yuyuan-tabs-content-item" v-for="(c,index) in defaults" :key="index" :is="c"></component>
        </div>
    </div>
</template>

<script lang="ts">
export default ({
    name:'Tabs',
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
        return {defaults,titles}
    }
})
</script>