<template>
  <div>
    <!-- <Switch :value='y' @update:value='y=$event'/> -->

    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1" title="常规用法"></Demo>
    <Demo :component="Switch2" title="支持 disable"></Demo>
  </div>
</template>

<script lang="ts">
import Switch1 from "../switchDemo/Switch1.vue";
import Switch2 from "../switchDemo/Switch2.vue";

import Demo from "../Demo.vue";

export default {
  name: "SwitchDemo",
  components: { Demo },
  setup() {
    return { Switch1, Switch2 };
  },
};
</script>
