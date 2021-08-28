<template>
  <div class="box">
    <div class="field">
      <label class="label">降水確率</label>
      <div class="control columns">
        <div class="column">
          <PartsCommonBox
            curTitle="0 時から 6 時までの降水確率"
            :curPropaty="getCurForecast().chanceOfRain.T00_06"
          />
        </div>
        <div class="column">
          <PartsCommonBox
            curTitle="6 時から 12 時までの降水確率"
            :curPropaty="getCurForecast().chanceOfRain.T06_12"
          />
        </div>
        <div class="column">
          <PartsCommonBox
            curTitle="12 時から 18 時までの降水確率"
            :curPropaty="getCurForecast().chanceOfRain.T12_18"
          />
        </div>
        <div class="column">
          <PartsCommonBox
            curTitle="18 時から 24 時までの降水確率"
            :curPropaty="getCurForecast().chanceOfRain.T18_24"
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
