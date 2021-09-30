<template>
  <VueCodeMirror ref="vueCodeMirror" v-model:markdown="markdown"/>
</template>

<script setup lang="ts">
import {VueCodeMirror} from "./CodeMirror";
import {ref, watch} from "vue";

const props = defineProps<{
  markdown: string;
}>();

const emit = defineEmits<{
  (event: "update:markdown", value: string): void;
}>();

watch(() => props.markdown, (markdown, prevMarkdown) => {
  emit('update:markdown', props.markdown);
})

const vueCodeMirror = ref<typeof VueCodeMirror>()
const updateValue = (value: string) => {
  vueCodeMirror?.value?.setValue(value)
}
defineExpose({
  updateValue
})
</script>

<style lang="scss" scoped>

</style>
