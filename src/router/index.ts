import {createRouter, createWebHistory} from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

import UIHome from "../views/ui/Home.vue";
import UIDoc from "../views/ui/Doc.vue";

import UISwitchDemo from "../views/ui/demos/SwitchDemo.vue";
import UIButtonDemo from "../views/ui/demos/ButtonDemo.vue";
import UIDialogDemo from "../views/ui/demos/DialogDemo.vue";
import UITabsDemo from "../views/ui/demos/TabsDemo.vue";

import {h} from "vue";
import Markdown from "../views/ui/components/Markdown.vue";
import Introduction from "../views/ui/markdowns/Introduction.md";
import Install from "../views/ui/markdowns/Install.md";
import Start from "../views/ui/markdowns/Start.md";
import BlogIndex from "../views/blog/Index.vue";
import BlogList from "../views/blog/List.vue";
import BlogCreate from "../views/blog/Create.vue";

const md = (string: string) => h(Markdown, {content: string, key: string});

const router = createRouter({
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
                    path: "",
                    redirect: "/ui/doc/introduction",
                },
                {
                    path: "introduction",
                    component: md(Introduction),
                },
                {
                    path: "install",
                    component: md(Install),
                },
                {
                    path: "start",
                    component: md(Start),
                },
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
        {
            path: "/blog",
            component: BlogIndex,
            children: [
                {
                    path: "",
                    redirect: "/blog/index"
                },
                {
                    path: "index",
                    component: BlogList
                },
                {
                    path: "create",
                    component: BlogCreate
                }
            ]
        }
    ],
});

router.beforeEach((to, from, next) => {
    next()
})

export default router
