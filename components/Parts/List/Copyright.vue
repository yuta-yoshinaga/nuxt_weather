<template>
  <div class="box">
    <div class="field">
      <label class="label">copyright</label>
      <div class="control">
        <PartsCommonBox
          v-for="(element, index) in copyrightInfo.elements"
          :key="index"
          :curTitle="element.title"
          :curPropaty="element.propaty"
        />
        <PartsCommonBoxWrap
          label="天気予報 API（livedoor天気互換）で使用している気象データの配信元（気象庁）"
          :elements="copyrightSrcInfo.elements"
          :isColums="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
  data() {
    return {
      copyrightInfo: {
        elements: [
          {
            title: "コピーライトの文言",
            propaty: this.getCurWether().copyright.title,
          },
          {
            title: "天気予報 API（livedoor 天気互換）の URL",
            propaty: this.getCurWetherCopyrightLink(),
          },
          {
            title: "天気予報 API（livedoor 天気互換）のアイコン",
            propaty: this.getCurWetherCopyrightIcon(),
          },
        ],
      },
      copyrightSrcInfo: {
        elements: [
          {
            title: "link",
            propaty: this.getCurWetherCopyrightProviderLink(),
          },
          {
            title: "name",
            propaty: this.getCurWether().copyright.provider[0].name,
          },
          {
            title: "note",
            propaty: this.getCurWether().copyright.provider[0].note,
          },
        ],
      },
    };
  },
  methods: {
    getCurWetherCopyrightLink() {
      return (
        `<a target="_blank" href="` +
        this.getCurWether().copyright.link +
        `">` +
        this.getCurWether().copyright.link +
        `</a>`
      );
    },
    getCurWetherCopyrightIcon() {
      return (
        `<img src="` +
        this.getCurWether().copyright.image.url +
        `" alt="` +
        this.getCurWether().copyright.image.title +
        `" width="` +
        this.getCurWether().copyright.image.width +
        `" height="` +
        this.getCurWether().copyright.image.height +
        `" />`
      );
    },
    getCurWetherCopyrightProviderLink() {
      return (
        `<a target="_blank" href="` +
        this.getCurWether().copyright.provider[0].link +
        `">` +
        this.getCurWether().copyright.provider[0].link +
        `</a>`
      );
    },
  },
};
</script>
