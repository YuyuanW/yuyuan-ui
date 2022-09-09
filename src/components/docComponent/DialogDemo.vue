<template>
  <div>
    <h1>Dialog的示例</h1>
    <Demo :component="Dialog1" title="常规使用"></Demo>
    <Demo :component="Dialog2" title="一键打开Dialog"></Demo>
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Dialog1 from "../dialogDemo/Dialog1.vue";
import Dialog2 from "../dialogDemo/Dialog2.vue";

export default {
  components: { Demo },
  setup() {
    return { Demo, Dialog1, Dialog2 };
  },
};
</script>
