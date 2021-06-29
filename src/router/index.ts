import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

import UIHome from "../views/UIFramework/Home.vue";
import UIDoc from "../views/UIFramework/Doc.vue";

import UISwitchDemo from "../views/UIFramework/demos/SwitchDemo.vue";
import UIButtonDemo from "../views/UIFramework/demos/ButtonDemo.vue";
import UIDialogDemo from "../views/UIFramework/demos/DialogDemo.vue";
import UITabsDemo from "../views/UIFramework/demos/TabsDemo.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/ui",
      component: UIHome,
    },
    {
      path: "/ui/doc",
      component: UIDoc,
      children: [
        {
          path: "switch",
          component: UISwitchDemo,
        },
        {
          path: "button",
          component: UIButtonDemo,
        },
        {
          path: "dialog",
          component: UIDialogDemo,
        },
        {
          path: "tabs",
          component: UITabsDemo,
        },
      ],
    },
  ],
});
