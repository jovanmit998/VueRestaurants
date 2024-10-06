import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import pinia from "./store";

const app = createApp(App);

app.use(router);
app.use(pinia);

createApp(App).mount("#app");
