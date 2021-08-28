<template>
  <div class="box">
    <div class="field">
      <label class="label">都道府県天気予報の予報日毎の配列</label>
      <div class="control columns">
        <div
          class="column"
          v-for="(forecast, index) in getCurWether().forecasts"
          :key="index"
        >
          <PartsCommonBox
            curTitle="予報日"
            :curPropaty="getCurWetherForecast(forecast)"
            :callback="daysChange"
            :callbackParam="forecast.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
  methods: {
    daysChange(date) {
      // 現在の日付を設定
      this.$store.dispatch("setCurrentDate", date);
      // ページ切り替え
      this.$store.dispatch("setCurrent", "detail");
      // ページ位置を先頭へ戻す
      scrollTo(0, 0);
    },
    getCurWetherForecast(forecast) {
      return `<button class="button is-link">` + forecast.date + `</button>`;
    },
  },
};
</script>
