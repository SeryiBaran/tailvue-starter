import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { unref } from 'vue'
import { config } from '../i18n'
import App from '../App.vue'

describe('I18n', async () => {
  expect(App).toBeTruthy()

  const i18nPlugin = createI18n(config)

  const wrapper = mount(App, {
    global: {
      plugins: [i18nPlugin],
    },
  })
  const locales = Object.keys(config.messages) as Array<
    keyof typeof config.messages
  >

  for (
    let index = locales.indexOf(unref(i18nPlugin.global.locale));
    index < locales.length + 1;
    index++
  ) {
    it(`Testing ${unref(i18nPlugin.global.locale)}...`, async () => {
      expect(wrapper.find('p[data-testId="aboutParagraph"]').text()).toBe(
        config.messages[
          index > locales.length - 1 ? locales[0] : locales[index]
        ].about
      )
      if (index !== 0)
        await wrapper
          .find('button[data-testId="toggleLocaleBtn"]')
          .trigger('click')
    })
  }
})
