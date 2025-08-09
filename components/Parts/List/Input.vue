<template>
  <div>
    <div class="columns">
      <div class="column">
        <label class="label">都道府県</label>
        <div class="select">
          <select v-model="curPref" @change="prefChange">
            <option v-for="(pref, index) in INFO_TBL.prefs" :key="index">
              {{ pref.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <label class="label">地域</label>
        <div class="select">
          <select v-model="curCity">
            <option
              v-for="(city, index) in filteredCitys"
              :value="city.id"
              :key="index"
            >
              {{ city.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <button :class="btnClass" @click="getWeather" :disabled="canSendBtn">
          取得
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useWeather } from '@/composables/useWeather'
import { INFO_TBL } from '@/utils/consts'

const { loading, curPref, curCity, citys, setCurPref, setCurCity, setCitys, fetchWeather, setCity: setStoreCity } = useWeather()

// Initialize curPref and curCity from store or default
if (!curPref.value && INFO_TBL.prefs.length > 0) {
  setCurPref(INFO_TBL.prefs[0].name);
}
if (!curCity.value && citys.value.length > 0) {
  setCurCity(citys.value[0].id);
}

const btnClass = computed(() => {
  return {
    button: true,
    "is-primary": true,
    "is-loading": loading.value,
  }
})

const canSendBtn = computed(() => {
  return curPref.value && curCity.value && !loading.value ? false : true
})

const filteredCitys = computed(() => {
  const selectedPref = INFO_TBL.prefs.find(pref => pref.name === curPref.value)
  return selectedPref ? selectedPref.citys : []
})

const prefChange = () => {
  const selectedPref = INFO_TBL.prefs.find(pref => pref.name === curPref.value)
  if (selectedPref) {
    setCitys(selectedPref.citys)
    setCurCity(null) // Reset city when prefecture changes
  }
}

const getWeather = () => {
  if (curCity.value) {
    setStoreCity(curCity.value) // Update the main city in the store
    fetchWeather(curCity.value)
  }
}

// Watch for changes in curPref and update citys in store
watch(curPref, (newPref) => {
  const selectedPref = INFO_TBL.prefs.find(pref => pref.name === newPref)
  if (selectedPref) {
    setCitys(selectedPref.citys)
    if (selectedPref.citys.length > 0) {
      setCurCity(selectedPref.citys[0].id)
    } else {
      setCurCity(null)
    }
  }
}, { immediate: true }) // Run immediately to set initial citys

// Watch for changes in filteredCitys and set curCity if it becomes null
watch(filteredCitys, (newCitys) => {
  if (!curCity.value && newCitys.length > 0) {
    setCurCity(newCitys[0].id)
  }
})
</script>