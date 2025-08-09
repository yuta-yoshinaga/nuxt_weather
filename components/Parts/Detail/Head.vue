<template>
  <div>
    <PartsCommonBox
      v-for="(element, index) in elements"
      :key="index"
      :curTitle="element.title"
      :curPropaty="element.propaty"
    />
  </div>
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
  if (!forecast) {
    return []
  }
  return [
    {
      title: "予報日",
      propaty: forecast.date,
    },
    {
      title: "予報日（今日・明日・明後日のいずれか）",
      propaty: forecast.dateLabel,
    },
    {
      title: "天気（晴れ、曇り、雨など）",
      propaty: forecast.telop,
    },
  ]
})
</script>