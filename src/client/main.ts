import { createApp } from "vue";
import App from "./pages/App.vue";
import "./styles/main.css";

const vm = createApp(App);

// Plugins:

// vm.use(router);

// Mount:

vm.mount("#app");

export default vm;
