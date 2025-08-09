<template>
  <PartsCommonBoxWrap label="天気詳細" :elements="elements" :isColums="true" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWeather } from '@/composables/useWeather'

const { selectedDate, getCurForecast } = useWeather()

const currentForecast = computed(() => {
  if (selectedDate.value) {
    return getCurForecast(selectedDate.value)
  }
  return null
})

const elements = computed(() => {
  const forecast = currentForecast.value
  if (!forecast || !forecast.detail) {
    return []
  }
  return [
    {
      title: "詳細な天気情報",
      propaty: forecast.detail.weather,
    },
    {
      title: "風の強さ",
      propaty: forecast.detail.wind,
    },
    {
      title: "波の高さ（海に面している地域のみ）",
      propaty: forecast.detail.wave,
    },
  ]
})
</script>