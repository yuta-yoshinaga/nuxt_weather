import { useWeatherStore } from '@/stores/weather'
import { storeToRefs } from 'pinia'

export const useWeather = () => {
  const store = useWeatherStore()

  // state や getters をリアクティブに参照するために storeToRefs を使う
  const { weather, city, currentView, error, loading, selectedDate, curPref, curCity, citys } = storeToRefs(store)

  // actions はそのままストアから呼び出せる
  const { fetchWeather, setCurrentView, setCity, setSelectedDate, setCurPref, setCurCity, setCitys } = store

  // Mixin にあったメソッドをここで定義する
  const getDay = (date: string) => {
    // ...日付処理
    const day = new Date(date).getDay()
    return ['日', '月', '火', '水', '木', '金', '土'][day]
  }

  // Adapting from mixin.js
  const getCurWeather = () => {
    return weather.value;
  };

  // This needs to be called with a date, as currentDate is not in the store
  const getCurForecast = (date: string) => {
    return store.getForecastByDate(date);
  };

  return {
    // コンポーネントで使う state, getters, actions, ヘルパーを返す
    weather,
    city,
    currentView,
    error,
    loading,
    selectedDate,
    curPref,
    curCity,
    citys,
    fetchWeather,
    setCurrentView,
    setCity,
    setSelectedDate,
    setCurPref,
    setCurCity,
    setCitys,
    getDay,
    getCurWeather,
    getCurForecast,
  }
}