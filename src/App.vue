<template>
  <n-loading-bar-provider>
    <RootLayout/>
  </n-loading-bar-provider>
</template>

<script setup lang="ts">
import RootLayout from "./layouts/RootLayout.vue";
import {provide, ref} from "vue";
import router from "./router";

const width = document.documentElement.clientWidth;
// 控制文档菜单是否显示
const menuVisible = ref(width <= 500 ? false : true);
provide("menuVisible", menuVisible);
router.afterEach(() => {
  if (width <= 500) {
    menuVisible.value = false;
  }
});

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  // 使边框和内边距的值包含在width内
  box-sizing: border-box;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
