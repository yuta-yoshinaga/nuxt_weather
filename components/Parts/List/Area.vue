<template>
  <PartsCommonBoxWrap
    label="予報を発表した地域を定義"
    :elements="elements"
    :isColums="true"
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
          title: "地方名",
          propaty: this.getCurWether().location.area,
        },
        {
          title: "都道府県名",
          propaty: this.getCurWether().location.prefecture,
        },
        {
          title: "一次細分区域名",
          propaty: this.getCurWether().location.district,
        },
        {
          title: "地域名（気象観測所名）",
          propaty: this.getCurWether().location.city,
        },
      ],
    };
  },
};
</script>
