<template>
  <n-layout-header bordered>
    <router-link to="/">Home</router-link>
    <router-link to="/blog/index">List</router-link>
    <router-link to="/blog/create">Create</router-link>
  </n-layout-header>
  <n-layout-content>
    <router-view/>
  </n-layout-content>
</template>

<script setup lang="ts">
import {useLoadingBar} from "naive-ui";

const loadingBar = useLoadingBar();
loadingBar.start();
setTimeout(() => {
  loadingBar.finish();
}, 1000)
</script>

<style lang="scss" scoped>
.n-layout-header {
  display: flex;
  align-items: center;
  height: 48px;

  & a {
    margin-left: 16px;
  }
}
</style>
