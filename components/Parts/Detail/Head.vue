<template>
  <div>
    <PartsCommonBox curTitle="予報日" :curPropaty="getCurForecast().date" />
    <PartsCommonBox
      curTitle="予報日（今日・明日・明後日のいずれか）"
      :curPropaty="getCurForecast().dateLabel"
    />
    <PartsCommonBox
      curTitle="天気（晴れ、曇り、雨など）"
      :curPropaty="getCurForecast().telop"
    />
  </div>
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
};
</script>
