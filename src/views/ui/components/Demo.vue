<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode">{{
        codeVisible ? "隐藏源代码" : "查看源代码"
      }}</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import "prismjs";
import "prismjs/themes/prism.css";
import Button from "../libs/Button.vue";
interface Props {
  component: any;
}
const props = withDefaults(defineProps<Props>(), {});
const title = ref<string>("");
title.value = props.component.__sourceCodeTitle;
const Prism = (window as any).Prism;
const html = computed(() => {
  return Prism.highlight(
    props.component.__sourceCode,
    Prism.languages.html,
    "html"
  );
});
const codeVisible = ref(false);
const toggleCode = () => (codeVisible.value = !codeVisible.value);
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 24px;
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
  }

  > pre {
    margin: 0;
  }
}
</style>
