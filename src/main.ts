import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import MukUI from "./components/muk-ui"
import JimmyUI from 'jimmy-ui'
const app = createApp(App)
app.use(JimmyUI)
app.mount("#app")
