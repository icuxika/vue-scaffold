<demo>
常规使用
</demo>

<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from "../libs/Tabs.vue";
import Tab from "../libs/Tab.vue";
import {ref} from "vue";

const x = ref("导航2");
</script>
