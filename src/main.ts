import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

import Card from '@/components/ui/Card.vue'

const app = createApp(App);

app.use(store);

app.component("Card", Card);

app.mount("#app");
