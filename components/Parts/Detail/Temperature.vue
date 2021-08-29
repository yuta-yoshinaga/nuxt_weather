<template>
  <PartsCommonBoxWrap :label="title" :elements="elements" :isColums="true" />
</template>

<script>
import Mixin from "../../mixin";
export default {
  props: ["title", "temperature"],
  mixins: [Mixin],
  data() {
    return {
      elements: [
        {
          title: "摂氏 (°C)",
          propaty: this.temperature.celsius,
        },
        {
          title: "華氏 (°F)",
          propaty: this.temperature.fahrenheit,
        },
      ],
    };
  },
};
</script>
