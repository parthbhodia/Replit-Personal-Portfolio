import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css' // Updated to match the imported CSS file

const app = createApp(App)
app.use(router)
app.mount('#app')
