import { createApp } from 'vue'
import App from './App.vue'
import Vuex from '../store'
import router from '../router/index'
import chartsVue from "@carbon/charts-vue";
const app = createApp(App)

app.use(Vuex)

app.use(router)

app.use(chartsVue)

app.mount('#app')

