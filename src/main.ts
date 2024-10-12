import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./routes";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import pinia from "./store";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ElementPlus);

createApp(App).mount("#app");
