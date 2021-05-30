import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
// import common from './modules/common';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    strict: debug,
    modules: {
        user,
        // common,
    },
});