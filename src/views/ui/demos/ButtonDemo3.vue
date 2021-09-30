<demo>
支持level
</demo>
<template>
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
</template>

<script setup lang="ts">
import Button from "../libs/Button.vue";</script>
