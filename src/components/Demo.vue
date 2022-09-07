<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions" @click="buttonChange">
      <Button @click="toggleView" v-if="buttonSort">查看代码</Button>
      <Button @click="toggleHid" v-else>隐藏代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-css" v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;
import Button from "../lib/Button.vue";
import { computed } from "@vue/runtime-core";
import { ref } from "vue";
export default {
  props: {
    component: {
      type: Object,
    },
    title: {
      type: String,
      default: "标题",
    },
  },
  components: { Button },
  setup(props) {
    const buttonSort = ref(true);
    const codeVisible = ref(false);
    const component = props.component;
    const toggleView = () => {
      codeVisible.value = true;
      buttonSort.value = false;
    };
    const toggleHid = () => {
      codeVisible.value = false;
      buttonSort.value = true;
    };
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    return {
      Prism,
      component,
      html,
      codeVisible,
      toggleView,
      toggleHid,
      buttonSort,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
