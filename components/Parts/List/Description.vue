<template>
  <PartsCommonBoxWrap
    label="天気概況文"
    :elements="elements"
    :isColums="false"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWeather } from '@/composables/useWeather'

const { weather } = useWeather()

const elements = computed(() => {
  const curWeather = weather.value
  if (!curWeather || !curWeather.description) {
    return []
  }
  return [
    {
      title: "天気概況文の発表時刻",
      propaty: curWeather.description.publicTimeFormatted,
    },
    {
      title: "天気概況文",
      propaty: curWeather.description.text,
    },
  ]
})
</script>