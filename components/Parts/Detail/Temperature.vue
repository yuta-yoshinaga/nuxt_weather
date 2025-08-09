<template>
  <PartsCommonBoxWrap :label="title" :elements="elements" :isColums="true" />
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  title: string,
  temperature: {
    celsius: string,
    fahrenheit: string
  }
}>()

const elements = computed(() => {
  return [
    {
      title: "摂氏 (°C)",
      propaty: props.temperature.celsius,
    },
    {
      title: "華氏 (°F)",
      propaty: props.temperature.fahrenheit,
    },
  ]
})
</script>