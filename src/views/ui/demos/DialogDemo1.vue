<demo>
常规使用
</demo>

<template>
  <Button @click="toggle">显示</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>Hi</strong>
      <div>Hello</div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../libs/Button.vue";
import Dialog from "../libs/Dialog.vue";
const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};
const f1 = () => {
  return false;
};
const f2 = () => {};
</script>
