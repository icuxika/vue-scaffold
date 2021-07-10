<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script setup lang="ts">
interface Props {
  content: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
