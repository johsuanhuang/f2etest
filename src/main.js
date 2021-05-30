import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import '@/style/main.scss';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/zh-tw';
import axios from 'axios';
import store from './store';
import router from './router';
import moment from 'moment';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronRight);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(DatePicker);
Vue.prototype.$http = axios;

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: (h) => h(App),
    data() {
        return {};
    },
    created() {},
    methods: {},
}).$mount('#app');