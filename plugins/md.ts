import fs from "fs";
import marked from "marked";

const md2Js = (str) => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};

export function md() {
  return {
    name: "md",
    load(id) {
      if (id.indexOf(".md") != -1) {
        return md2Js(fs.readFileSync(id).toString());
      }
    },
  };
}
