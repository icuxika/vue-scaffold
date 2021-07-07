<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
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
  <h1>示例2</h1>
  <Button @click="showDialog">显示</Button>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import Button from "../libs/Button.vue";
import Dialog from "../libs/Dialog.vue";
import { openDialog } from "../libs/openDialog";
const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};
const f1 = () => {
  return false;
};
const f2 = () => {};
const showDialog = () => {
  openDialog({
    title: h("strong", {}, "标题"),
    content: h("strong", {}, "Hello"),
    ok() {
      alert("OK");
      return true;
    },
    cancel() {
      alert("Cancel");
    },
  });
};
</script>
