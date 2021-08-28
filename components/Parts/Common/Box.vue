<template>
  <div class="box">
    <div class="field">
      <label class="label">{{ curTitle }}</label>
      <div class="control" v-html="curPropaty" @click="clickEvent"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["curTitle", "curPropaty", "callback", "callbackParam"],
  methods: {
    clickEvent() {
      if (this.callback) {
        this.callback(this.callbackParam);
      }
    },
  },
};
</script>
