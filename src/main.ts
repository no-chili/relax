import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/styles/common.css";
import App from "./App.vue";
import router from "./router";
//使用mock拦截，如需发真实请求请注释下下面这行代码
import "@/utiles/mock";
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
