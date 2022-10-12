import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import "./dark.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { useI18n } from "./i18n";

const app = createApp(App)
app.use(router)
app.use(useI18n);
app.use(ElementPlus);
app.mount('#app')
