<template>
  <div>
    <Switch v-model:value="activate" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "../libs/Switch.vue";
const activate = ref(false);
</script>
