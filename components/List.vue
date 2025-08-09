<template>
  <div>
    <h1 class="title">天気予報</h1>
    <PartsListInput />
    <PartsListError />
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <div v-if="weather">
      <PartsListHead />
      <PartsListDescription />
      <PartsListForecasts />
      <PartsListArea />
      <PartsListCopyright />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useWeather } from '@/composables/useWeather'

// Composable から必要なものを全て取り出す
const { weather, loading, error, fetchWeather, setCity } = useWeather()

// フォームの入力と連携するためのリアクティブな参照
const selectedCity = ref('130010')

const searchWeather = () => {
  setCity(selectedCity.value)
  fetchWeather(selectedCity.value)
}

// 初期表示時にデータを取得
onMounted(() => {
  if (!weather.value) {
    fetchWeather(selectedCity.value)
  }
})
</script>