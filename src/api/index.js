import Vue from "vue";
import store from "@/store";
import axios from "axios";
import * as url from "./urlConfig";

axios.defaults.timeout = 15e3;
const { protocol, host } = window.location; // 協議、主機
const reg = /^localhost+/;
const reg2 = /^mytest+/;

if (reg.test(host) || reg2.test(host)) {
    // 本機開發
    axios.defaults.baseURL = "http://localhost:8015/";
    // axios.defaults.baseURL = "https://mytest.1177tech.com.tw/";
} else {
    // 動態請求地址
    axios.defaults.baseURL = `${protocol}//${host}/`;
}


axios.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

axios.interceptors.response.use(
    response => response,
    error => {
        errorHandler(error);
        if (!window.navigator.onLine) {
            alert("網路出了點問題，請重新連線後重整網頁");
            return;
        }
        return Promise.reject(error);
    }
);

const formDataInstance = axios.create({
    headers: { "Content-Type": false, processData: false }
});

function errorHandler(error) {
    if (error.response) {
        switch (error.response.status) {
            case 404:
                console.log("你要找的頁面不存在");
                break;
            case 500:
                console.log("程式發生問題");
                break;
            default:
                console.log(error.message);
                break;
        }
    }
}




export const userApi = {
    // 取得訂單資訊
    getBillInfo(sendData) {
        return axios.post(url.user.bill, sendData).then(response => response.data);
    },
};