<template>
  <div>
    <h1>Tabs示例</h1>
    <Demo :component="Tabs1" title="Tabs使用" />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Tabs1 from "../tabsDemo/Tabs1.vue";
export default {
  name: "TabsDemo",
  components: {
    Demo,
    Tabs1,
  },
  setup() {
    return { Tabs1, Demo };
  },
};
</script>
