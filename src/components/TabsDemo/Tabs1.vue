<demo>
    常规使用
</demo>

<template>
  <div>
    <Tabs v-model:selected="x">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Tabs, Tab } from "../../lib/index";
import { ref } from "vue";

export default {
  name: "Tabs1",
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("导航1");
    return { x, Tabs, Tab };
  },
};
</script>
