<demo>
    常规使用
</demo>

<template>
  <Button @click="toggleDialog">toggle</Button>
  <Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <strong>你好</strong>
      <p>halo</p>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";
export default {
  name: "Dialog1",
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggleDialog = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      // console.log(1)
      return false;
    };
    const f2 = () => {
      // console.log(2)
      return true;
    };

    return { visible, toggleDialog, f1, f2 };
  },
};
</script>
