import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./pages/App.vue";
import LandingPage from "./pages/LandingPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import "./styles/main.css";

const vm = createApp(App);

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

vm.use(router);

vm.mount("#app");

export default vm;
