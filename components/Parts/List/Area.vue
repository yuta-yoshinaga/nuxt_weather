<template>
  <PartsCommonBoxWrap
    label="予報を発表した地域を定義"
    :elements="elements"
    :isColums="true"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWeather } from '@/composables/useWeather'

const { weather } = useWeather()

const elements = computed(() => {
  const curWeather = weather.value
  if (!curWeather || !curWeather.location) {
    return []
  }
  return [
    {
      title: "地方名",
      propaty: curWeather.location.area,
    },
    {
      title: "都道府県名",
      propaty: curWeather.location.prefecture,
    },
    {
      title: "一次細分区域名",
      propaty: curWeather.location.district,
    },
    {
      title: "地域名（気象観測所名）",
      propaty: curWeather.location.city,
    },
  ]
})
</script>