import { createApp } from 'vue'
import App from './App.vue'
import Menu from './components/Menu'
console.log(Menu)
createApp(App)
.use(Menu).mount('#app')

