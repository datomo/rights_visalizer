import {createStore} from 'vuex'

export default createStore({
    state: {
        json: {},

    },
    mutations: {
        SET_JSON(state, json) {
            state.json = json;
        }
    },
    actions: {
        setJson({commit}, json) {
            console.log("hi")
            commit("SET_JSON", json);
        }
    },
    modules: {},
    getters: {
        json(state) {
            return state.json
        }
    }
})
