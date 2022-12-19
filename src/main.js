import { createApp } from "vue";
import { createPinia } from "pinia";
import draggable from "vuedraggable";
import App from "./App.vue";

import "./assets/main.css";
const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.component("vue-draggable", draggable);

app.mount("#app");
