import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import VueTableLite from 'vue3-table-lite'
import './style.css';

import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'



import { SchemaForm } from "formvuelate";

const app = createApp(App).use(router).use(store)





app.use(BootstrapVue3)
app.mount('#app')

