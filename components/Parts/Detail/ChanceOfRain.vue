<template>
  <PartsCommonBoxWrap label="降水確率" :elements="elements" :isColums="true" />
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
  const chanceOfRain = currentForecast.value?.chanceOfRain
  if (!chanceOfRain) {
    return []
  }
  return [
    {
      title: "0 時から 6 時までの降水確率",
      propaty: chanceOfRain.T00_06,
    },
    {
      title: "6 時から 12 時までの降水確率",
      propaty: chanceOfRain.T06_12,
    },
    {
      title: "12 時から 18 時までの降水確率",
      propaty: chanceOfRain.T12_18,
    },
    {
      title: "18 時から 24 時までの降水確率",
      propaty: chanceOfRain.T18_24,
    },
  ]
})
</script>