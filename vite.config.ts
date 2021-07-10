import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";
import path from "path";
import scss from "rollup-plugin-scss";
import sass from "sass";

import { md } from "./plugins/md";

const demo = {
  name: "demo",
  transform(code, id) {
    if (!/vue&type=demo/.test(id)) {
      return;
    }
    const file = fs.readFileSync(id.split("?")[0]).toString();
    const parsed = baseParse(file).children.find((n) => n.tag === "demo");
    const title = parsed.children[0].content;
    const main = file
      .split(parsed.loc.source)
      .join("")
      .trim();
    return `export default Component => {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), md(), demo],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/views/ui/libs/index.ts"),
      name: "vue-scaffold-ui",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      plugins: [scss({ include: /\.scss$/, sass: sass })],
    },
  },
});
