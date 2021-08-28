<template>
  <div class="box">
    <div class="field">
      <label class="label">copyright</label>
      <div class="control">
        <PartsCommonBox
          curTitle="コピーライトの文言"
          :curPropaty="getCurWether().copyright.title"
        />
        <PartsCommonBox
          curTitle="天気予報 API（livedoor 天気互換）の URL"
          :curPropaty="getCurWetherCopyrightLink()"
        />
        <PartsCommonBox
          curTitle="天気予報 API（livedoor 天気互換）のアイコン"
          :curPropaty="getCurWetherCopyrightIcon()"
        />
        <div class="box">
          <div class="field">
            <label class="label"
              >天気予報 API（livedoor
              天気互換）で使用している気象データの配信元（気象庁）</label
            >
            <div class="control columns">
              <div class="column">
                <PartsCommonBox
                  curTitle="link"
                  :curPropaty="getCurWetherCopyrightProviderLink()"
                />
              </div>
              <div class="column">
                <PartsCommonBox
                  curTitle="name"
                  :curPropaty="getCurWether().copyright.provider[0].name"
                />
              </div>
              <div class="column">
                <PartsCommonBox
                  curTitle="note"
                  :curPropaty="getCurWether().copyright.provider[0].note"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from "../../mixin";
export default {
  mixins: [Mixin],
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
