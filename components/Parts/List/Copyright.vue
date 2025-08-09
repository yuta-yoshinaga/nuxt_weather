<template>
  <div class="box">
    <div class="field">
      <label class="label">copyright</label>
      <div class="control">
        <PartsCommonBox
          v-for="(element, index) in copyrightInfo.elements"
          :key="index"
          :curTitle="element.title"
          :curPropaty="element.propaty"
        />
        <PartsCommonBoxWrap
          label="天気予報 API（livedoor天気互換）で使用している気象データの配信元（気象庁）"
          :elements="copyrightSrcInfo.elements"
          :isColums="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWeather } from '@/composables/useWeather'

const { weather } = useWeather()

const getCurWetherCopyrightLink = computed(() => {
  const copyright = weather.value?.copyright
  if (!copyright) return ''
  return `<a target="_blank" href="${copyright.link}">${copyright.link}</a>`
})

const getCurWetherCopyrightIcon = computed(() => {
  const copyright = weather.value?.copyright
  if (!copyright || !copyright.image) return ''
  const image = copyright.image
  return `<img src="${image.url}" alt="${image.title}" width="${image.width}" height="${image.height}" />`
})

const getCurWetherCopyrightProviderLink = computed(() => {
  const provider = weather.value?.copyright?.provider?.[0]
  if (!provider) return ''
  return `<a target="_blank" href="${provider.link}">${provider.link}</a>`
})

const copyrightInfo = computed(() => {
  const curWeather = weather.value
  if (!curWeather || !curWeather.copyright) {
    return { elements: [] }
  }
  return {
    elements: [
      {
        title: "コピーライトの文言",
        propaty: curWeather.copyright.title,
      },
      {
        title: "天気予報 API（livedoor 天気互換）の URL",
        propaty: getCurWetherCopyrightLink.value,
      },
      {
        title: "天気予報 API（livedoor 天気互換）のアイコン",
        propaty: getCurWetherCopyrightIcon.value,
      },
    ],
  }
})

const copyrightSrcInfo = computed(() => {
  const curWeather = weather.value
  if (!curWeather || !curWeather.copyright || !curWeather.copyright.provider?.[0]) {
    return { elements: [] }
  }
  const provider = curWeather.copyright.provider[0]
  return {
    elements: [
      {
        title: "link",
        propaty: getCurWetherCopyrightProviderLink.value,
      },
      {
        title: "name",
        propaty: provider.name,
      },
      {
        title: "note",
        propaty: provider.note,
      },
    ],
  }
})
</script>