<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const localeStore = useLocalStorage('locale', i18n.locale)
</script>

<template>
  <div class="m-auto flex min-h-[100vh] flex-col items-center justify-center p-4 text-center font-sans">
    <header class="flex flex-wrap items-center justify-center gap-4">
      <h1>
        Tailvue
      </h1>

      <select v-model="localeStore" class="text-gray-800">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </header>
    <main class="flex flex-col items-center gap-4">
      <section>
        <p>
          {{ $t("about") }}
        </p>
      </section>

      <a href="https://github.com/SeryiBaran/tailvue-starter" target="_blank" class="btn">
        <span class="icon icon-[mdi--github]" />Github
      </a>
    </main>
  </div>
</template>
