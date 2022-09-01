<template>
    <div>
        <span>
            button示例
        </span>
        <h2>示例1</h2>
        <div>
            <Button theme="button" >halo</Button>
            <Button theme="link" >halo</Button>
            <Button theme="text" >halo</Button>
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