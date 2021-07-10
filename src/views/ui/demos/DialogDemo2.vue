<demo>
一键打开Dialog
</demo>

<template>
  <Button @click="showDialog">显示</Button>
</template>

<script setup lang="ts">
import { h } from "vue";
import { openDialog } from "../libs/openDialog";
import Button from "../libs/Button.vue";
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
