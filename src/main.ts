import {createApp} from "vue";
import App from "./App.vue";
import router from "./router/index";
import {key, store} from "./store"

import {
    create,
    NButton,
    NCard,
    NConfigProvider,
    NDialogProvider,
    NGi,
    NGrid,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLoadingBarProvider,
    NMessageProvider,
    NModal,
    NPagination,
    NSpace,
    NTime,
    NTimeline,
    NTimelineItem
} from "naive-ui";

const naive = create({
    components: [NModal, NPagination, NTime, NGrid, NGi, NTimeline, NTimelineItem, NMessageProvider, NDialogProvider, NConfigProvider, NLoadingBarProvider, NButton, NSpace, NCard, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter]
})

const app = createApp(App);
app.use(router);
app.use(store, key);
app.use(naive);
app.mount("#app");
