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
          title: "予報の発表日時",
          propaty: this.getCurWether().publicTimeFormatted,
        },
        {
          title: "予報を発表した気象台",
          propaty: this.getCurWether().publishingOffice,
        },
        {
          title: "タイトル・見出し",
          propaty: this.getCurWether().title,
        },
        {
          title:
            "リクエストされたデータの地域に該当する気象庁 HP の天気予報のURL",
          propaty: this.getCurWetherLink(),
        },
      ],
    };
  },
  methods: {
    getCurWetherLink() {
      return (
        `<a target="_blank" href="` +
        this.getCurWether().link +
        `">` +
        this.getCurWether().link +
        `</a>`
      );
    },
  },
};
</script>
