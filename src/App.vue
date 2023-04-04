<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import IconMdiGithub from 'virtual:icons/mdi/github'
import IconMdiThemeLightDark from 'virtual:icons/mdi/theme-light-dark'
import IconMdiTranslate from 'virtual:icons/mdi/translate'
import { toggleDark } from '@/composables/dark'

const i18n = useI18n()

const localeStore = useLocalStorage('locale', i18n.locale)

function toggleLocale() {
  const availableLocales = i18n.availableLocales
  const indexOfCurrentLocale = availableLocales.indexOf(localeStore.value)

  if (!(indexOfCurrentLocale >= 0))
    return
  if (!(indexOfCurrentLocale < availableLocales.length - 1)) {
    localeStore.value = availableLocales[0]
    return
  }

  localeStore.value = availableLocales[indexOfCurrentLocale + 1]
}
</script>

<template>
  <div class="m-auto flex min-h-[100vh] max-w-2xl flex-col items-center justify-center p-4 text-center font-sans">
    <header class="flex flex-wrap items-center justify-center gap-4">
      <h1>
        Tailvue
      </h1>
    </header>
    <main class="flex flex-col items-center gap-4">
      <section>
        <p>
          {{ $t("about") }}
        </p>
      </section>

      <div class="flex gap-4">
        <a href="https://github.com/SeryiBaran/tailvue-starter" target="_blank" class="btn icon-button">
          <IconMdiGithub class="icon" />
        </a>

        <button class="btn icon-button" @click="toggleDark()">
          <IconMdiThemeLightDark class="icon" />
        </button>

        <button class="btn icon-button" @click="toggleLocale()">
          <IconMdiTranslate class="icon" />
        </button>
      </div>
    </main>
  </div>
</template>
