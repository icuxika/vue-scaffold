<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "../libs/Switch.vue";
const bool = ref(false);
</script>
