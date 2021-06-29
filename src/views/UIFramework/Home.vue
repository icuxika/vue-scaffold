<template>
  <TopNav />
  <div class="banner">
    <h1>Vue3 UI</h1>
    <h2>Vue3 UI 框架</h2>
    <p class="actions">
      <a href="#">Github</a>
      <router-link to="/ui/doc">开始</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import TopNav from "./components/TopNav.vue";
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;

  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h / 2;
      padding: 0 8px;
    }
  }
}
</style>
