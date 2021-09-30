<template>
  <h1>Button示例</h1>
  <Demo :component="ButtonDemo1"/>
  <Demo :component="ButtonDemo2"/>
  <Demo :component="ButtonDemo3"/>
  <Demo :component="ButtonDemo4"/>
  <Demo :component="ButtonDemo5"/>
</template>

<script setup lang="ts">
import Demo from "../components/Demo.vue";
import ButtonDemo1 from "../demos/ButtonDemo1.vue";
import ButtonDemo2 from "../demos/ButtonDemo2.vue";
import ButtonDemo3 from "../demos/ButtonDemo3.vue";
import ButtonDemo4 from "../demos/ButtonDemo4.vue";
import ButtonDemo5 from "../demos/ButtonDemo5.vue";</script>

<style lang="scss" scoped></style>
