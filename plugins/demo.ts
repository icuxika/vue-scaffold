import * as fs from "fs";
import {
    BaseElementNode,
    baseParse,
    CompoundExpressionNode,
    SimpleExpressionNode,
    TemplateChildNode
} from "@vue/compiler-core";
import {PluginOption} from "vite";

export function demo(): PluginOption {
    return {
        name: "demo",
        transform(code, id) {
            if (!/vue&type=demo/.test(id)) {
                return;
            }
            const file = fs.readFileSync(id.split("?")[0]).toString();
            const parsed: TemplateChildNode = baseParse(file).children.find((n) => (n as BaseElementNode).tag === "demo");
            const title = ((parsed as CompoundExpressionNode).children[0] as SimpleExpressionNode).content;
            const main = file
                .split(parsed.loc.source)
                .join("")
                .trim();
            return `export default Component => {
                Component.__sourceCode = ${JSON.stringify(main)};
                Component.__sourceCodeTitle = ${JSON.stringify(title)};
            }`.trim();
        },
    }
}
