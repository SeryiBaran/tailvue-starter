import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { config } from '../i18n'
import App from '../App.vue'

describe('I18n', async () => {
  it('Click to #localeToggleButton (locales.length + 1) times', async () => {
    expect(App).toBeTruthy()

    const i18nPlugin = createI18n(config)

    const wrapper = mount(App, {
      global: {
        plugins: [i18nPlugin],
      },
    })

    const locales = Object.keys(config.messages) as Array<keyof typeof config.messages>

    for (let index = 0; index < locales.length + 1; index++) {
      if (index !== 0)
        await wrapper.find('button#localeToggleButton').trigger('click')

      expect(wrapper.find('main p#about').text()).toBe(config.messages[index > locales.length - 1 ? locales[0] : locales[index]].about)
    }
  })
})
