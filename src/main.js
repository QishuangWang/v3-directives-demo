import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import VueDirectives from "v3-directives";
// import VueDirectives from "./directives/main.js";
const app = createApp(App)
app.use(router).mount('#app')
app.use(VueDirectives)
