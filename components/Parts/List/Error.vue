<template>
  <div v-if="error">
    <article class="message is-danger">
      <div class="message-header">
        <p>Error</p>
      </div>
      <div class="message-body">
        {{ error.message }}
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { useWeather } from '@/composables/useWeather'

const { error } = useWeather()
</script>