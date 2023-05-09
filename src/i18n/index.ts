import en from './en.json'
import ru from './ru.json'

export const messages = {
  ru,
  en,
}

export const config = {
  legacy: false,
  locale: navigator.language.slice(0, 2) || 'en',
  fallbackLocale: 'en',
  messages,
}
