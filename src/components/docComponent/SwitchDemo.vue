<template>
  <div>
    <!-- <Switch :value='y' @update:value='y=$event'/> -->

    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1" title="常规用法"></Demo>
    <Demo :component="Switch2" title="支持 disable"></Demo>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch1 from "../switchComponent/Switch1.vue";
import Switch2 from "../switchComponent/Switch2.vue";

import Demo from "../Demo.vue";

export default {
  name: "SwitchDemo",
  components: { Demo },
  setup() {
    const bool = ref(false);
    return { bool, Switch1, Switch2 };
  },
};
</script>
