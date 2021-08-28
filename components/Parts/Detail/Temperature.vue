<template>
  <div class="box">
    <div class="field">
      <label class="label">{{ title }}</label>
      <div class="control columns">
        <div class="column">
          <PartsCommonBox
            curTitle="摂氏 (°C)"
            :curPropaty="temperature.celsius"
          />
        </div>
        <div class="column">
          <PartsCommonBox
            curTitle="華氏 (°F)"
            :curPropaty="temperature.fahrenheit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from "../../mixin";
export default {
  props: ["title", "temperature"],
  mixins: [Mixin],
};
</script>
