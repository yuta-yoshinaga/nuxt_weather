<template>
  <PartsCommonBoxWrap
    label="天気概況文"
    :elements="elements"
    :isColums="false"
  />
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
  data() {
    return {
      elements: [
        {
          title: "天気概況文の発表時刻",
          propaty: this.getCurWether().description.publicTimeFormatted,
        },
        {
          title: "天気概況文",
          propaty: this.getCurWether().description.text,
        },
      ],
    };
  },
};
</script>
