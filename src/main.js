import { createApp } from 'vue'
import App from './App.vue'
import Vuex from '../store'
//import VueRouter from 'vue-router'
import router from '../router/index'

//Vue.use(VueRoter)

const app = createApp(App)

app.use(Vuex)

app.use(router)

app.mount('#app')

