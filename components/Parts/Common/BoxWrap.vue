<template>
  <div class="box">
    <div class="field">
      <label class="label">{{ label }}</label>
      <div class="control columns" v-if="isColums">
        <div class="column" v-for="(element, index) in elements" :key="index">
          <PartsCommonBox
            :curTitle="element.title"
            :curPropaty="element.propaty"
          />
        </div>
      </div>
      <div class="control" v-else>
        <PartsCommonBox
          v-for="(element, index) in elements"
          :key="index"
          :curTitle="element.title"
          :curPropaty="element.propaty"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Element {
  title: string;
  propaty: string;
}

const props = defineProps<{
  label: string,
  elements: Element[],
  isColums?: boolean
}>()
</script>