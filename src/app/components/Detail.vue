<template>
  <div>
    <button class="button is-link" @click="prev()">戻る</button>
    <PartsDetailHead />
    <PartsDetailWeather />
    <PartsDetailTemperature
      title="最高気温"
      :temperature="getCurForecast().temperature.max"
    />
    <PartsDetailTemperature
      title="最低気温"
      :temperature="getCurForecast().temperature.min"
    />
    <PartsDetailChanceOfRain />
    <PartsCommonBox
      curTitle="天気アイコン"
      :curPropaty="getCurForecastImage()"
    />
    <button class="button is-link" @click="prev()">戻る</button>
  </div>
</template>

<script>
import Mixin from "./mixin";
export default {
  mixins: [Mixin],
  methods: {
    getCurForecastImage() {
      return (
        `<img src="` +
        this.getCurForecast().image.url +
        `" alt="` +
        this.getCurForecast().image.title +
        `" width="` +
        this.getCurForecast().image.width +
        `" height="` +
        this.getCurForecast().image.height +
        `" />`
      );
    },
    prev() {
      // ページ切り替え
      this.$store.dispatch("setCurrent", "list");
      // ページ位置を先頭へ戻す
      scrollTo(0, 0);
    },
  },
};
</script>
