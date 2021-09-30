import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {StateInterface} from "../index";
import {blogService} from "../../api/modules/blog"

export interface BlogStateInterface {
    prop: boolean;
}

function state(): BlogStateInterface {
    return {
        prop: false
    }
}

const getters: GetterTree<BlogStateInterface, StateInterface> = {}

const mutations: MutationTree<BlogStateInterface> = {
    setProp(state, prop) {
        state.prop = prop;
    }
}

const actions: ActionTree<BlogStateInterface, StateInterface> = {
    async setProp({commit}, prop) {
        blogService.getBlogPage({
            currentPage: 1,
            pageSize: 10
        }).then(response => {
            console.log('!!!!!!!!!!!')
            console.log(response.data)
            console.log('!!!!!!!!!!!')
            // console.log(response.data.data)
            // console.log(response.data.data.records)
            // console.log(response.data.data.records[1].blogContent)
        }).catch(error => {
            console.log(error)
        })
        commit('setProp', prop)
    }
}

const blogModule: Module<BlogStateInterface, StateInterface> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default blogModule
