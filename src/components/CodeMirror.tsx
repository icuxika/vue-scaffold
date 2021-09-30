// 引入CodeMirror及基础样式
import "codemirror/lib/codemirror.css"
// Markdown 支持
import "codemirror/mode/markdown/markdown"
// IDEA样式
import "codemirror/theme/idea.css"
import "codemirror/theme/solarized.css"
// 支持使用Vim快捷键
import "codemirror/keymap/vim"
// 支持搜索
import "codemirror/addon/dialog/dialog"
import "codemirror/addon/dialog/dialog.css"
import "codemirror/addon/search/search"
import "codemirror/addon/search/searchcursor"
// 支持代码折叠
import "codemirror/addon/fold/foldgutter"
import "codemirror/addon/fold/foldgutter.css"
import "codemirror/addon/fold/foldcode"
import "codemirror/addon/fold/brace-fold"
import "codemirror/addon/fold/comment-fold"
// 支持代码区域全屏
import "codemirror/addon/display/fullscreen"
import "codemirror/addon/display/fullscreen.css"
// 支持括号自动匹配
import "codemirror/addon/edit/matchbrackets"
import "codemirror/addon/edit/closebrackets"
// 支持代码自动补全
import "codemirror/addon/hint/show-hint"
import "codemirror/addon/hint/show-hint.css"
import "codemirror/addon/hint/anyword-hint"
// 行注释
import "codemirror/addon/comment/comment"

import {defineComponent, getCurrentInstance, markRaw, onMounted, ref} from "vue";
import CodeMirror from "codemirror";
import ResizeObserver from "resize-observer-polyfill";

export const VueCodeMirror = defineComponent({
    props: {
        markdown: {
            type: String
        }
    },
    emits: ['update:markdown'],
    setup(props, {attrs, slots, emit, expose}) {
        const divRef = ref<HTMLDivElement>()
        let editor: CodeMirror.Editor;
        onMounted(() => {
            editor = markRaw(CodeMirror(divRef.value!, {
                value: props.markdown,
                mode: 'text/markdown',
                theme: 'solarized',
                lineWrapping: true,
                lineNumbers: true,
            }));
            editor.setSize('auto', 'auto');
            editor.on('changes', () => {
                emit('update:markdown', editor.getValue());
            });
            const ro = new ResizeObserver((entries, observer) => {
                entries.forEach(entry => {
                    editor.refresh()
                })
            })
            ro.observe(getCurrentInstance()?.proxy?.$el);
        })

        const setValue = (value: string) => {
            editor.setValue(value)
        }

        expose({
            setValue
        })

        return () => (
            <div ref={divRef} class={'vue-code-mirror'}/>
        )
    }
})
