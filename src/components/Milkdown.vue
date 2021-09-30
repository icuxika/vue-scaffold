<template>
  <div :class="`container ${showSource ? 'two-side' : ''}`">
    <div class="milk">
      <MarkdownEditor ref="markdownEditor" v-model:markdown="value"/>
    </div>
    <CodeEditor
        ref="codeEditor"
        v-show="showSource"
        v-model:markdown="value"
        @mouseenter="codeMouseEnter"
        @mouseleave="codeMouseLeave"
    />
  </div>
</template>

<script setup lang="ts">
import MarkdownEditor from "./MarkdownEditor.vue"
import CodeEditor from "./CodeEditor.vue";
import {ref, watch} from "vue";

const props = defineProps<{
  markdown: string;
  showSource: boolean;
}>();

const value = ref(props.markdown)

const emit = defineEmits<{
  (event: "update:markdown", value: string): void;
}>();

let focusSource = "markdown"
const codeMouseEnter = (event: MouseEvent) => {
  focusSource = "code"
}
const codeMouseLeave = (event: MouseEvent) => {
  focusSource = "markdown"
}

const markdownEditor = ref<typeof MarkdownEditor>()
const codeEditor = ref<typeof CodeEditor>()

watch(value, (value, prevValue) => {
  emit('update:markdown', value)
  if (focusSource == 'code') {
    markdownEditor?.value?.setMarkdown(value)
  }
  if (focusSource == 'markdown') {
    if (codeEditor.value) {
      codeEditor.value.updateValue(value)
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  padding: 24px;
  display: flex;
  justify-content: center;
  transition: all 0.4s ease-in-out;

  & .milk {
    flex: 1 1 50%;
    transition: all 0.4s ease-in-out;

    & .milkdown {
      max-width: unset;
    }
  }

  & .vue-code-mirror {
    transition: all 0.4s ease-in-out, height 0s, padding 0s;
  }
}

.two-side {
  padding: 24px;
  gap: 1.25rem;
  max-width: unset;

  & .vue-code-mirror {
    flex: 1 1 50%;
  }
}
</style>
