<template>
  <h1>Button示例</h1>

  <Demo :component="Button1" title="示例1"></Demo>
  <Demo :component="Button2" title="示例2"></Demo>
  <Demo :component="Button3" title="示例3"></Demo>
  <Demo :component="Button4" title="示例4"></Demo>
  <Demo :component="Button5" title="示例5"></Demo>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Button1 from "../buttonDemo/Button1.vue";
import Button2 from "../buttonDemo/Button2.vue";
import Button3 from "../buttonDemo/Button3.vue";
import Button4 from "../buttonDemo/Button4.vue";
import Button5 from "../buttonDemo/Button5.vue";

export default {
  name: "ButtonDemo",
  components: { Demo, Button1, Button2, Button3, Button4, Button5 },
  setup() {
    return { Button1, Button2, Button3, Button4, Button5 };
  },
};
</script>
