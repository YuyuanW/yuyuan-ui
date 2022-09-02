<template>
    <div>
        Dialog示例
    </div>
    <h1>示例1</h1>
    <Button @click="toggleDialog">toggle</Button>
    <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"></Dialog>
    
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
        const f1 = ()=>{
            // console.log(1)
            return false
        }
        const f2 = ()=>{
            // console.log(2)
            return true
        }
        return {visible,toggleDialog,f1,f2}
    }
}
</script>