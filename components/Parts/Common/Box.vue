<template>
  <div class="box">
    <div class="field">
      <label class="label">{{ curTitle }}</label>
      <div class="control" v-html="curPropaty" @click="clickEvent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  curTitle: string,
  curPropaty: string,
  callback?: Function,
  callbackParam?: any
}>()

const emit = defineEmits(['clickEvent']) // Define custom event

const clickEvent = () => {
  if (props.callback) {
    props.callback(props.callbackParam)
  }
  emit('clickEvent', props.callbackParam) // Emit a custom event as well
}
</script>