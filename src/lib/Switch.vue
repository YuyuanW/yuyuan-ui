<template>
  <button
    class="yuyuan-switch"
    @click="toggle"
    :class="{ 'yuyuan-checked': value }"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };

    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.yuyuan-switch {
  width: $h * 2;
  height: $h;
  border: none;
  border-radius: 11px;
  background: gray;
  position: relative;
  z-index: 0;
  > span {
    position: absolute;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    top: 2px;
    left: 2px;
    transition: left 250ms;
  }

  &.yuyuan-checked {
    background: blue;
    > span {
      left: calc(100% - $h2 - 2px);
    }
  }

  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.yuyuan-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
