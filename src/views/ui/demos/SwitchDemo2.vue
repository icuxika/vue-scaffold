<demo>
支持disabled
</demo>

<template>
  <Switch v-model:value="bool" disabled />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "../libs/Switch.vue";
const bool = ref(false);
</script>
