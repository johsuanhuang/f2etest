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
    setUserLeftMenu(state, data) {
        //判斷是否有 客服身分  [新增話後註記]
        if (sessionStorage.getItem("simulation")) {
            console.log("simulation -- yes", sessionStorage.getItem("simulation"));
            // state.menu = data; //上線開啟
        } else {
            console.log("simulation -- no");
            // state.menu = data.filter(e => e.mainfunction.indexOf("MDB07")) //上線開啟
        }

        state.menu = data; //上線刪除
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};