<template>
  <VueEditor :editor="editor"/>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
import {
  Ctx,
  defaultValueCtx,
  Editor,
  editorViewCtx,
  parserCtx,
  rootCtx,
  serializerCtx,
  themeFactory
} from '@milkdown/core';
import {nord} from '@milkdown/theme-nord';
import {useEditor, VueEditor} from '@milkdown/vue';
import {commonmark} from '@milkdown/preset-commonmark';
import {Icon} from '@milkdown/design-system';
import {Slice} from "prosemirror-model";
import {listener, listenerCtx} from "@milkdown/plugin-listener";

const props = defineProps<{
  markdown: string;
}>();

const emit = defineEmits<{
  (event: "update:markdown", value: string): void;
}>();

const iconMapping: Record<Icon, string> = {
  h1: 'vue',
  h2: 'vue',
  h3: 'vue',
  quote: 'vue',
  code: 'vue',
  table: 'vue',
  divider: 'vue',
  image: 'vue',
  brokenImage: 'vue',
  bulletList: 'vue',
  orderedList: 'vue',
  taskList: 'vue',
  leftArrow: 'vue',
  rightArrow: 'vue',
  upArrow: 'vue',
  downArrow: 'ICUXIKA',
  alignLeft: 'vue',
  alignRight: 'vue',
  alignCenter: 'vue',
  delete: 'vue',
  select: 'vue',
  bold: 'vue',
  italic: 'vue',
  inlineCode: 'vue',
  strikeThrough: 'vue',
  link: 'vue',
  checked: 'vue',
  unchecked: 'vue',
  loading: 'vue'
}

const customTheme = themeFactory({
  font: {
    typography: ['Roboto', 'Helvetica', 'Arial'], // 编辑器中的文本的字体，例如标题，段落，引用。
    code: ['Monaco', 'Fira Code'], // 编辑器中的代码的字体，例如代码块和行内代码。
  },
  size: {
    radius: '2px', // 圆角的大小。
    lineWidth: '1px', // 线的宽度，例如 border 和分割线。
  },
  color: {
    primary: '#ff79c6', // 编辑器的主色。通常被用在大色块上，例如引用区的色块。
    secondary: '#bd93f9', // 编辑器的副色，用在提示区域，例如链接。
    neutral: '#000',
    background: '#bababa',
  },
  slots: () => ({
    icon: (id) => {
      const span = document.createElement("span");
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon-' + iconMapping[id])
      svg.appendChild(use)
      span.append(svg);
      return span;
    }
  })
});

let ctxRef: Ctx;

const onChange = (get: () => string) => {
  emit('update:markdown', get());
}

const editor = useEditor((root) =>
    Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, props.markdown);
          ctx.set(listenerCtx, {markdown: [onChange]});
          ctxRef = ctx;
        })
        .use(nord)
        .use(commonmark)
        .use(customTheme)
        .use(listener)
);

const getMarkdown = () => {
  const editorView = ctxRef.get(editorViewCtx);
  const serializer = ctxRef.get(serializerCtx);
  return serializer(editorView.state.doc);
}

const setMarkdown = (value: string) => {
  const editorView = ctxRef.get(editorViewCtx);
  const parser = ctxRef.get(parserCtx);
  const doc = parser(value);
  const state = editorView.state;
  editorView.dispatch(state.tr.replace(0, state.doc.content.size, new Slice(doc?.content as any, 0, 0)))
}

defineExpose({
  getMarkdown,
  setMarkdown
})

</script>

<style scoped>
</style>
