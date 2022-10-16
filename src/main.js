import { createApp } from 'vue'
import App from './App.vue'
import VueConfetti from 'vue-confetti'

const app = createApp(App)

app.mount('#app')

app.use(VueConfetti)
