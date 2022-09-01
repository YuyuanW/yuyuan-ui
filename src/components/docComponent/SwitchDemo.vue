<template>
    <div>
        <!-- <Switch :value='y' @update:value='y=$event'/> -->
        <Switch v-model:value='y' />
    </div>
    
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../../lib/Switch.vue';

export default ({
    name:'SwitchDemo',
    components:{Switch},
    setup(){
        const y = ref(false)
        return {y}
    }
})
</script>