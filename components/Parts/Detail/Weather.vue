<template>
  <div class="box">
    <div class="field">
      <label class="label">天気詳細</label>
      <div class="control columns">
        <div class="column">
          <PartsCommonBox
            curTitle="詳細な天気情報"
            :curPropaty="getCurForecast().detail.weather"
          />
        </div>
        <div class="column">
          <PartsCommonBox
            curTitle="風の強さ"
            :curPropaty="getCurForecast().detail.wind"
          />
        </div>
        <div class="column">
          <PartsCommonBox
            curTitle="波の高さ（海に面している地域のみ）"
            :curPropaty="getCurForecast().detail.wave"
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
};
</script>
