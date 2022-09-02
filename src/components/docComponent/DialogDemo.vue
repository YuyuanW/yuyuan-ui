<template>
    <div>
        Dialog示例
    </div>
    <h1>示例1</h1>
    <Button @click="toggleDialog">toggle</Button>
    <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <strong>你好</strong>
            <p>halo</p>
        </template>
        <template #title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>

    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
    
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import { ref } from 'vue';
import {openDialog} from '../../lib/openDialog'
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
        const showDialog = ()=>{
            openDialog({
                title:'halo',
                content:'franchise',
                ok:()=>{
                    console.log('ok')
                    return false
                },
                cancel:()=>{
                    console.log('cancel')
                    return true
                    
                }
            })
        }
        return {visible,toggleDialog,f1,f2,showDialog}
    }
}
</script>