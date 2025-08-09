<template>
  <div class="box">
    <div class="field">
      <label class="label">都道府県天気予報の予報日毎の配列</label>
      <div class="control columns">
        <div
          class="column"
          v-for="(forecast, index) in weather?.forecasts"
          :key="index"
        >
          <PartsCommonBox
            curTitle="予報日"
            :curPropaty="getCurWetherForecast(forecast)"
            :callback="daysChange"
            :callbackParam="forecast.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeather } from '@/composables/useWeather'

const { weather, setCurrentView, setSelectedDate } = useWeather()

const daysChange = (date: string) => {
  setSelectedDate(date)
  setCurrentView('detail')
  // scrollTo(0, 0); // Nuxt 3 handles scroll behavior by default, or can be configured
}

const getCurWetherForecast = (forecast: any) => {
  return `<button class="button is-link">${forecast.date}</button>`
}
</script>