<template>
  <n-layout-header>
    <n-button dashed type="primary" @click="printMarkdownContent">保存</n-button>
    <n-button dashed type="info" @click="showSource = !showSource">{{ showSource ? '取消' : '编辑' }}</n-button>
  </n-layout-header>
  <Milkdown v-model:markdown="markdown" v-model:show-source="showSource"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useDialog, useMessage} from "naive-ui";
import Milkdown from "../../components/Milkdown.vue"

const showSource = ref(false);

const markdown = ref(`
# Milkdown Test
## Blockquote
> Milkdown is an editor.
## Marks Paragraph
Hello, ***milkdown* nice \`to\` meet *you***!
There should be a line break before this.
---
## Image and Link
**Of course you can add image! ![cat](https://images.news18.com/ibnlive/uploads/2021/06/1623900306_untitled-design-2021-06-17t085747.057.png "kitty")**
Your *[link is here](https://bing.com "bing")*, have a look.
## Lists
* list item 1
    1. is this the real life
    2. is this just fantasy
* list item 2
    * sub list item 1
        some explain
    * sub list item 2
* list item 3
## Code
\`\`\`javascript
const milkdown = new Milkdown();
milkdown.create();
\`\`\`
---
Now you can play!
`);

const message = useMessage();
const dialog = useDialog();
const printMarkdownContent = () => {
  dialog.success({
    title: '保存',
    content: '确定要保存该博客吗？',
    positiveText: '是',
    negativeText: '否',
    onPositiveClick: () => {
      message.success('OK');
      console.log(markdown.value)
    },
    onNegativeClick: () => {
      message.error('NO');
    }
  })
}

</script>

<style lang="scss" scoped>
.n-layout-header {
  display: flex;
  justify-content: end;
  padding: 8px 0;

  & .n-button {
    margin-right: 16px;
  }
}
</style>
