<template>
  <div id="app" v-cloak>
    <component :is="this.$store.getters['component']" />
  </div>
</template>

<script>
import List from "~/components/List.vue";
import Detail from "~/components/Detail.vue";
import "~/assets/sass/style.scss";

export default {
  components: {
    "component-list": List,
    "component-detail": Detail,
  },
  created() {
    // ページ切り替え
    this.$store.dispatch("setCurrent", "list");
    // ページ位置を先頭へ戻す
    scrollTo(0, 0);
  },
};
</script>