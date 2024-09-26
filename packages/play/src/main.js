import { createApp } from 'vue'

import App from './App.vue'
import UserElement from 'usercomp'

let app = createApp(App)

app.use(UserElement).mount('#app')
