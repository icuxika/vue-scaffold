import {InjectionKey} from "vue";
import {createStore, Store, useStore as vuexUseStore} from "vuex";
import indexModule, {IndexStateInterface} from "./modules";
import blogModule, {BlogStateInterface} from "./modules/blog";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<StateInterface>
    }
}

export interface StateInterface {
    index: IndexStateInterface;
    blog: BlogStateInterface;
}

export const key: InjectionKey<Store<StateInterface>> = Symbol('vuex-key');

export const store = createStore<StateInterface>({
    modules: {
        index: indexModule,
        blog: blogModule
    }
})

export function useStore() {
    return vuexUseStore(key)
}
