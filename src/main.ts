import './assets/styles/variables.css'
import './assets/styles/main.css'

import './assets/styles/components/login-layout.css'
import './assets/styles/components/input-field.css'
import './assets/styles/components/forgot-password.css'
import './assets/styles/components/not-account-sign-up.css'
import './assets/styles/components/loader-dots.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
