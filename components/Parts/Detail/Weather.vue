<template>
  <PartsCommonBoxWrap label="天気詳細" :elements="elements" :isColums="true" />
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
  data() {
    return {
      elements: [
        {
          title: "詳細な天気情報",
          propaty: this.getCurForecast().detail.weather,
        },
        {
          title: "風の強さ",
          propaty: this.getCurForecast().detail.wind,
        },
        {
          title: "波の高さ（海に面している地域のみ）",
          propaty: this.getCurForecast().detail.wave,
        },
      ],
    };
  },
};
</script>
