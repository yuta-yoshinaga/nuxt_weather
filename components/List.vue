<template>
  <div>
    <h1 class="title">天気予報</h1>
    <PartsListInput />
    <PartsListError />
    <div v-if="getCurWether()">
      <PartsListHead />
      <PartsListDescription />
      <PartsListForecasts />
      <PartsListArea />
      <PartsListCopyright />
    </div>
  </div>
</template>

<script>
import Mixin from "./mixin";
export default {
  mixins: [Mixin],
};
</script>
