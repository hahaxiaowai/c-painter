import { createApp } from 'vue'
import { DropdownButton } from 'ant-design-vue';
import App from './App.vue'
import Menu from './components/Menu'
createApp(App)
.use(DropdownButton)
.use(Menu).mount('#app')

