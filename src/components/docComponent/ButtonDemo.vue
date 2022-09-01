<template>
    <div>
        <h2>我是button</h2>
        <div>
            <Button @click="onClick" @mouseover="onClick" @focus="onClick">你好</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
    name:'ButtonDemo',
    components: { Button },
    setup(){
        const onClick = ()=>{
            console.log('hi')
        }
        return {onClick}
    }
}
</script>