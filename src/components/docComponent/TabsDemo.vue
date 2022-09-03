<template>
    <div>Tabs 示例</div>
    <h1>示例1</h1>
    <Tabs>
        <Tab></Tab>
        <Tab></Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
export default({
    name:'TabsDemo',
    components:{
        Tab,Tabs
    }
})
</script>
