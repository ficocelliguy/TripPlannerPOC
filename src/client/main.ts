import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import VueApolloComponents from "@vue/apollo-components";
import App from "./pages/App.vue";
import LandingPage from "./pages/LandingPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import "./styles/main.css";
import EditLocations from "./pages/LocationData.vue";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:9090/graphql",
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

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
  {
    path: "/locations",
    name: "locations",
    component: EditLocations,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

vm.use(router);
vm.use(apolloProvider);
vm.use(VueApolloComponents);

vm.mount("#app");

export default vm;
