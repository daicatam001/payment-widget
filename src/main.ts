import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

import Card from '@/components/ui/Card.vue'
import Input from '@/components/ui/Input.vue'
import Line from '@/components/ui/Line.vue'
import NumberBox from '@/components/ui/NumberBox.vue'
import Stars from '@/components/ui/Stars.vue'
import State from '@/components/ui/State.vue'

const app = createApp(App);

app.use(store);

app.component("Card", Card);
app.component("Input", Input);
app.component("Line", Line);
app.component("NumberBox", NumberBox);
app.component("Stars", Stars);
app.component("State", State);

app.mount("#app");
