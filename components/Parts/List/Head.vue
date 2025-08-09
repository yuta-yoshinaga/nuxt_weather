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

const { weather } = useWeather()

const getCurWetherLink = computed(() => {
  const curWeather = weather.value
  if (!curWeather) return ''
  return `<a target="_blank" href="${curWeather.link}">${curWeather.link}</a>`
})

const elements = computed(() => {
  const curWeather = weather.value
  if (!curWeather) {
    return []
  }
  return [
    {
      title: "予報の発表日時",
      propaty: curWeather.publicTimeFormatted,
    },
    {
      title: "予報を発表した気象台",
      propaty: curWeather.publishingOffice,
    },
    {
      title: "タイトル・見出し",
      propaty: curWeather.title,
    },
    {
      title:
        "リクエストされたデータの地域に該当する気象庁 HP の天気予報のURL",
      propaty: getCurWetherLink.value,
    },
  ]
})
</script>