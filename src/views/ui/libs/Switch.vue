<template>
  <button class="v3-switch" :class="{ 'v3-checked': value }" @click="toggle">
    <span></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: Boolean;
}>();

const emit = defineEmits<{
  (event: "update:value", value: boolean): void;
}>();

const toggle = () => {
  emit("update:value", !props.value);
};
</script>

<style lang="scss">
@use "sass:math";

$h1: 22px;
$h2: $h1 - 4px;
.v3-switch {
  height: $h1;
  width: $h1 * 2;
  border: none;
  background: grey;
  border-radius: math.div($h1, 2);
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);
    transition: left 0.25s;
  }

  &.v3-checked {
    background: dodgerblue;

    > span {
      left: calc(100% - #{$h2} - 2px);
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

  &.v3-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
