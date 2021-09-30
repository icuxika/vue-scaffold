import * as fs from "fs";
import {PluginOption} from "vite";
import marked = require("marked");

const md2Js = (str: string) => {
    const content = JSON.stringify(marked(str));
    return `export default ${content}`;
};

export function md(): PluginOption {
    return {
        name: "md",
        load(id: string) {
            if (id.indexOf(".md") != -1) {
                return md2Js(fs.readFileSync(id).toString());
            }
        },
    };
}
