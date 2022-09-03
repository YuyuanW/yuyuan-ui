<template>
    <div>Tabs</div>
</template>

<script lang="ts">
export default ({
    name:'Tabs',
    setup(props,context){
        const defaults = context.slots.default()
        defaults.forEach(element => {
            if(element.type.name !== 'Tab'){
                throw new Error('Tabs的子标签必须为Tab')
            }
        });
        
    }
})
</script>