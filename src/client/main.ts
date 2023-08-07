import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./pages/App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import "./styles/main.css";

const vm = createApp(App);

const routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/about',
        name: "about",
        component: About
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

vm.use(router);

vm.mount("#app");

export default vm;
