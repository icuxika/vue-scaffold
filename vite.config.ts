import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import {md} from "./plugins/md";
import {demo} from "./plugins/demo";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx({}), md(), demo()],
    server: {
        port: 3031
    }
});
