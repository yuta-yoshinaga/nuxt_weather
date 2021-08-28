<template>
  <div>
    <PartsCommonBox
      curTitle="予報の発表日時"
      :curPropaty="getCurWether().publicTimeFormatted"
    />
    <PartsCommonBox
      curTitle="予報を発表した気象台"
      :curPropaty="getCurWether().publishingOffice"
    />
    <PartsCommonBox curTitle="タイトル・見出し" :curPropaty="getCurWether().title" />
    <PartsCommonBox
      curTitle="リクエストされたデータの地域に該当する気象庁 HP の天気予報のURL"
      :curPropaty="getCurWetherLink()"
    />
  </div>
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
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
