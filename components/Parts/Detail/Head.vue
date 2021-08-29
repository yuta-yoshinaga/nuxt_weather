<template>
  <div>
    <PartsCommonBox
      v-for="(element, index) in elements"
      :key="index"
      :curTitle="element.title"
      :curPropaty="element.propaty"
    />
  </div>
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
  data() {
    return {
      elements: [
        {
          title: "予報日",
          propaty: this.getCurForecast().date,
        },
        {
          title: "予報日（今日・明日・明後日のいずれか）",
          propaty: this.getCurForecast().dateLabel,
        },
        {
          title: "天気（晴れ、曇り、雨など）",
          propaty: this.getCurForecast().telop,
        },
      ],
    };
  },
};
</script>
