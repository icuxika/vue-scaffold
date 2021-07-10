<template>
  <div class="v3-tabs">
    <div class="v3-tabs-nav" ref="container">
      <div
        class="v3-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) {
              // 此处待解决的一个赋值时类型冲突的问题，暂时用any解决
              selectedItem = el;
            }
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="v3-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="v3-tabs-content">
      <component :is="current" :key="current?.props?.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useSlots, watchEffect } from "vue";
import Tab from "./Tab.vue";

interface Props {
  selected: String;
}
const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<{
  (event: "update:selected", selected: string): void;
}>();

const selectedItem = ref<any>();
const indicator = ref<HTMLDivElement>();
const container = ref<HTMLDivElement>();

onMounted(() => {
  watchEffect(() => {
    if (selectedItem.value) {
      const { width } = selectedItem.value.getBoundingClientRect();
      if (indicator.value) {
        indicator.value.style.width = width + "px";
        if (container.value) {
          const { left: left1 } = container.value.getBoundingClientRect();
          const { left: left2 } = selectedItem.value.getBoundingClientRect();
          const left = left2 - left1;
          indicator.value.style.left = left + "px";
        }
      }
    }
  });
});

const slots = useSlots();
// 由于可能为undefined，相应的代码需要优化编写的方式
const defaults = slots.default?.();

let titles: string[] = [];
if (defaults) {
  defaults.forEach((tag) => {
    if (tag.type !== Tab) {
      throw new Error("Tabs 子标签必须是 Tab");
    }
  });

  titles = defaults.map((tag) => {
    return tag.props?.title as string;
  });
}

const current = computed(() => {
  return defaults?.find((tag) => tag.props?.title === props.selected);
});

const select = (title: string) => {
  emit("update:selected", title);
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.v3-tabs {
  &-nav {
    display: flex;
    justify-content: center;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 10px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
