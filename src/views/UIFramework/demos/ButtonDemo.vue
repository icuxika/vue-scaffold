<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">大大大</Button>
    <Button>普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普通</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text">普通</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <Button level="main">主要</Button>
    <Button>普通</Button>
    <Button level="danger">危险</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
  </div>
  <h1>示例5</h1>
  <div class="container">
    <Button loading>加载中</Button>
    <Button class="x">加载完毕</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "../libs/Button.vue";
const onClick = () => {
  alert("This is a Button!");
};
</script>

<style lang="scss" scoped></style>
