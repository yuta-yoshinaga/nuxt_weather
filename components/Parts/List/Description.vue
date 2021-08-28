<template>
  <div class="box">
    <div class="field">
      <label class="label">天気概況文</label>
      <div class="control">
        <PartsCommonBox
          curTitle="天気概況文の発表時刻"
          :curPropaty="getCurWether().description.publicTimeFormatted"
        />
        <PartsCommonBox
          curTitle="天気概況文"
          :curPropaty="getCurWether().description.text"
        />
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
