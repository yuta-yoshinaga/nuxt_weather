import { defineStore } from 'pinia'

// APIレスポンスの型定義 (必要に応じて詳細化)
interface WeatherData {
  // ... APIのレスポンスに応じた型を定義
  forecasts: Array<any>; // Added based on getter usage
}

interface City {
  name: string;
  id: string;
}

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    // state
    city: '130010', // Tokyo
    weather: null as WeatherData | null,
    error: null as any,
    loading: false,
    currentView: 'list', // 'list' or 'detail'
    selectedDate: null as string | null,
    curPref: null as string | null, // Added curPref
    curCity: null as string | null, // Added curCity
    citys: [] as City[] // Added citys
  }),

  getters: {
    // getters
    getForecastByDate: (state) => (date: string) => {
      return state.weather?.forecasts.find(f => f.date === date)
    },
    // ... 他のゲッター
  },

  actions: {
    // actions
    async fetchWeather(cityCode: string) {
      this.loading = true
      this.error = null
      const config = useRuntimeConfig()

      try {
        const data = await $fetch<WeatherData>(`/api/forecast`, {
          baseURL: config.public.weatherApiBaseUrl,
          params: { city: cityCode }
        })
        this.weather = data
        this.city = cityCode
      } catch (e) {
        this.error = e
        this.weather = null
      } finally {
        this.loading = false
      }
    },

    setCurrentView(view: 'list' | 'detail') {
      this.currentView = view
    },

    setCity(cityCode: string) {
        this.city = cityCode
    },

    setSelectedDate(date: string) {
        this.selectedDate = date
    },

    setCurPref(pref: string) { // Added setCurPref action
        this.curPref = pref
    },

    setCurCity(city: string | null) { // Added setCurCity action
        this.curCity = city
    },

    setCitys(citys: City[]) { // Added setCitys action
        this.citys = citys
    }
  }
})