<template>
  <PartsCommonBoxWrap label="降水確率" :elements="elements" :isColums="true" />
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
  data() {
    return {
      elements: [
        {
          title: "0 時から 6 時までの降水確率",
          propaty: this.getCurForecast().chanceOfRain.T00_06,
        },
        {
          title: "6 時から 12 時までの降水確率",
          propaty: this.getCurForecast().chanceOfRain.T06_12,
        },
        {
          title: "12 時から 18 時までの降水確率",
          propaty: this.getCurForecast().chanceOfRain.T12_18,
        },
        {
          title: "18 時から 24 時までの降水確率",
          propaty: this.getCurForecast().chanceOfRain.T18_24,
        },
      ],
    };
  },
};
</script>
