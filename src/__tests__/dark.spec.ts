import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import App from '../App.vue'
import { config } from '@/i18n'
import { isDark } from '@/composables/dark'

describe('Dark theme', async () => {
  it('Click to toggleDarkBtn 2 times', async () => {
    expect(App).toBeTruthy()

    const i18nPlugin = createI18n(config)

    const wrapper = mount(App, {
      global: {
        plugins: [i18nPlugin],
      },
    })

    await wrapper.find('button[data-testId="toggleDarkBtn"]').trigger('click')
    expect(isDark.value).toBeTruthy()

    await wrapper.find('button[data-testId="toggleDarkBtn"]').trigger('click')
    expect(isDark.value).not.toBeTruthy()

    await wrapper.find('button[data-testId="toggleDarkBtn"]').trigger('click')
    expect(isDark.value).toBeTruthy()

    // TODO: expect(5). // нет подсказок .to*
  })
})
