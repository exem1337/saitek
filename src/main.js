import { createApp } from 'vue'
import App from './App.vue'
import Vuex from '../store'
import router from '../router/index'

const app = createApp(App)

app.use(Vuex)

app.use(router)

app.mount('#app')

