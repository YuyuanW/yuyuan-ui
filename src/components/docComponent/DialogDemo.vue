<template>
    <div>
        Dialog示例
    </div>
    <h1>示例1</h1>
    <Button @click="toggleDialog">toggle</Button>
    <Dialog :visible="visible"></Dialog>
    
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import { ref } from 'vue';
export default {
    name: "DialogDemo",
    components: { Dialog, Button },
    setup(){
        const visible = ref(false)
        const toggleDialog = ()=>{
            visible.value = !visible.value
        }
        return {visible,toggleDialog}
    }
}
</script>