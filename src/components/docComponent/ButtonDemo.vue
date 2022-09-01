<template>
    <div>
        <div>
            Button示例
        </div>
        <h2>示例1</h2>
        <div>
            <Button theme="button" >halo</Button>
            <Button theme="link" >halo</Button>
            <Button theme="text" >halo</Button>
        </div>


        <h2>示例2</h2>
        <div>
            <Button size="small">small</Button>
            <Button>normal</Button>
            <Button size="big" >big</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
    name:'ButtonDemo',
    components: { Button },
}
</script>