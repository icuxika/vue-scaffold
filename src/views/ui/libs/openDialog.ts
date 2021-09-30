import Dialog from "./Dialog.vue";
import {createApp, h, VNode} from "vue";

export const openDialog = (options: {
    title: VNode;
    content: VNode;
    ok: Function;
    cancel: Function;
}) => {
    const {title, content, ok, cancel} = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    closeOnClickOverlay: true,
                    ok,
                    cancel,
                    "onUpdate:visible": (newVisible: Boolean) => {
                        if (newVisible === false) {
                            close();
                        }
                    },
                },
                {
                    title,
                    content,
                }
            );
        },
    });
    const close = () => {
        app.unmount();
        div.remove();
    };
    app.mount(div);
};
