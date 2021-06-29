import { defineComponent, h } from "vue";

export const Test = defineComponent({
  render() {
    return h("h" + this.level, "Hello, world!");
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
