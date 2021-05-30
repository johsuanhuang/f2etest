import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "",
        name: "Home",
        component: Home,
        children: [{
            path: "/",
            name: "Billing",
            component: () =>
                import ("@/views/Billing.vue"),
        }]
    },
    {
        path: "*",
        name: "error",
        component: () =>
            import ("@/views/Home.vue"),
    }
];


const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});

export default router;