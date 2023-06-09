import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { config as i18nConfig } from './i18n'
import App from './App.vue'

import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'
import './styles/main.css'

const app = createApp(App)
const i18n = createI18n(i18nConfig)
app.use(i18n)
app.mount('#app')
