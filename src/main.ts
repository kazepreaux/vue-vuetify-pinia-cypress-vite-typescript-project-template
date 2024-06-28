import { createApp } from "vue";
import { buildRouter } from "./plugins/router";
import pinia from "./store";
import App from "./App.vue";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { vuetifyInstance } from "./plugins/vuetify";

const router = buildRouter();

const app = createApp(App);
app.use(vuetifyInstance);
app.use(router);
app.use(pinia);

app.mount("#app");
