import { userApi } from "@/api";
import router from "../../router";
import axios from "axios";
import moment from 'moment';

const state = () => ({
    billDone: [],
    billOn: [],
});

// getters
const getters = {};

// actions
const actions = {
    async getBillInfo({ commit, dispatch, state }) {
        const { rc, rm, data } = await userApi.getBillInfo();
        if (parseInt(rc) != 0) return;

        commit("setData", data);
    },

};

// mutations
const mutations = {
    setData(state, data) {
        data.orders.sort(function(a, b) {
            let aa = new Date(a.date)
            let bb = new Date(b.date)
            return bb - aa;
        });
        state.billDone = data.orders.filter(e => e.status.code > 2)

        state.billOn = data.orders.filter(e => e.status.code < 3)
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};