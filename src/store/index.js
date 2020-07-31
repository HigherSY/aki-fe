import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: null,
        token: localStorage.getItem('token')
    },
    mutations: {
        login: (state, token) => {
            localStorage.token = token;
            state.token = token;
        },
        logout: (state) => {
            localStorage.removeItem('token');
            state.token = null
        }
    }
})
