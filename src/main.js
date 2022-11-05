import { createApp } from "vue";
import { createPinia } from "./mini-pinia";
// import { createPinia } from "pinia";

import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");
