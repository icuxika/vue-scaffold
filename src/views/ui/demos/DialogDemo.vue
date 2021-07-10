<template>
  <h1>Dialog示例</h1>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
</template>

<script setup lang="ts">
import Demo from "../components/Demo.vue";
import DialogDemo1 from "../demos/DialogDemo1.vue";
import DialogDemo2 from "../demos/DialogDemo2.vue";
</script>
