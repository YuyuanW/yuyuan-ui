<template>
  <div class="yuyuan-tabs">
    <div class="yuyuan-tabs-nav">
      <div
        class="yuyuan-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
        :class="{ selected: selected === t }"
      >
        {{ t }}
      </div>
    </div>
    <div class="yuyuan-tabs-content">
      <component
        class="yuyuan-tabs-content-item"
        v-for="(c, index) in defaults"
        :key="index"
        :is="c"
        :class="{ selected: selected === c.props.title }"
      ></component>
    </div>
  </div>
</template>

<script lang="ts" setup="props, context">
import Tab from "./Tab.vue";
import { computed, ref, watchEffect, onMounted, useSlots } from "vue";
// ** References: https://vitejs.dev/guide/features.html#typescript */
import type { Component } from "vue";
const props = defineProps<{ selected: string }>();
const emit = defineEmits<{
  (e: "update:selected", title: string): void;
}>();
const selectedItem = ref<HTMLDivElement>(null);
const indicator = ref<HTMLDivElement>(null);
const container = ref<HTMLDivElement>(null);

onMounted(() => {
  watchEffect(
    () => {
      const { width } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    },
    {
      flush: "post",
    }
  );
});
const slots = useSlots();
const defaults = slots.default();
defaults.forEach((tag) => {
  if ((tag.type as Component).name !== Tab.name) {
    throw new Error("Tabs 子标签必须是 Tab");
  }
});

const current = computed(() => {
  return defaults.find((tag) => tag.props.title === props.selected);
});

const titles = defaults.map((tag) => {
  return tag.props.title;
});

const select = (title: string) => {
  emit("update:selected", title);
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.yuyuan-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 16px;

      cursor: pointer;
      &:first-child {
        padding-left: 0;
      }
      &.selected {
        color: $blue;
        box-shadow: 0px 3px 0px ($blue);
        /* border-bottom:3px solid $blue */
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        //
        display: block;
      }
    }
  }
}
</style>
