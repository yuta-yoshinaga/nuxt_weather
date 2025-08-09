<template>
  <div>
    <button class="button is-link" @click="prev()">戻る</button>
    <PartsDetailHead />
    <PartsDetailWeather />
    <PartsDetailTemperature
      title="最高気温"
      :temperature="currentForecast?.temperature.max"
    />
    <PartsDetailTemperature
      title="最低気温"
      :temperature="currentForecast?.temperature.min"
    />
    <PartsDetailChanceOfRain />
    <PartsCommonBox
      curTitle="天気アイコン"
      :curPropaty="currentForecastImage"
    />
    <button class="button is-link" @click="prev()">戻る</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWeather } from '@/composables/useWeather'

const { weather, selectedDate, setCurrentView, getCurForecast } = useWeather()

const currentForecast = computed(() => {
  if (selectedDate.value) {
    return getCurForecast(selectedDate.value)
  }
  return null
})

const currentForecastImage = computed(() => {
  if (currentForecast.value?.image) {
    const image = currentForecast.value.image
    return `<img src="${image.url}" alt="${image.title}" width="${image.width}" height="${image.height}" />`
  }
  return ''
})

const prev = () => {
  setCurrentView('list')
  // scrollTo(0, 0); // Nuxt 3 handles scroll behavior by default, or can be configured
}
</script>