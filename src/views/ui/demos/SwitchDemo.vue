<template>
  <div>
    <Demo :component="SwitchDemo1" />
    <Demo :component="SwitchDemo2" />
  </div>
</template>

<script setup lang="ts">
import Demo from "../components/Demo.vue";
import SwitchDemo1 from "../demos/SwitchDemo1.vue";
import SwitchDemo2 from "../demos/SwitchDemo2.vue";
</script>
