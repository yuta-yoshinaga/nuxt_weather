<template>
  <div class="box">
    <div class="field">
      <label class="label">予報を発表した地域を定義</label>
      <div class="control columns">
        <div class="column">
          <PartsCommonBox
            curTitle="地方名"
            :curPropaty="getCurWether().location.area"
          />
        </div>
        <div class="column">
          <PartsCommonBox
            curTitle="都道府県名"
            :curPropaty="getCurWether().location.prefecture"
          />
        </div>
        <div class="column">
          <PartsCommonBox
            curTitle="一次細分区域名"
            :curPropaty="getCurWether().location.district"
          />
        </div>
        <div class="column">
          <PartsCommonBox
            curTitle="地域名（気象観測所名）"
            :curPropaty="getCurWether().location.city"
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
