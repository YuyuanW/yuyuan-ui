<demo>
    一键打开dialog
</demo>

<template>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { openDialog } from "../../lib/openDialog";
export default {
  name: "Dialog2",
  components: { Dialog, Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "yuyuan",
        content: "yuyuan is rich",
        ok: () => {
          console.log("ok");
          return false;
        },
        cancel: () => {
          console.log("cancel");
          return true;
        },
      });
    };
    return { showDialog };
  },
};
</script>
