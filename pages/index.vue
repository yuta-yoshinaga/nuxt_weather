<template>
  <div>
    <component :is="activeComponent" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useWeather } from '@/composables/useWeather'

// Composable から状態を取得
const { currentView } = useWeather()

// 動的コンポーネントの定義
const ListComponent = defineAsyncComponent(() => import('@/components/List.vue'))
const DetailComponent = defineAsyncComponent(() => import('@/components/Detail.vue'))

// currentView の値に応じて表示するコンポーネントを切り替える
const activeComponent = computed(() => {
  return currentView.value === 'detail' ? DetailComponent : ListComponent
})
</script>