<template>
  <h1>{{ msg }}</h1>
  <Test :level="1">Hello</Test>
  <button @click="color = 'green'">Make it green</button>
  <br />
  <router-link to="/ui">UI Framework</router-link>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Test } from "../components/JSXComponent";
const msg = ref("Hello, world!");
const color = ref("red");
</script>

<style>
h1 {
  color: v-bind(color);
}
</style>
