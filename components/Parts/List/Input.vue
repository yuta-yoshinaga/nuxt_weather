<template>
  <div>
    <div class="columns">
      <div class="column">
        <label class="label">都道府県</label>
        <select v-model="curPref" @change="prefChange">
          <option v-for="(pref, index) in prefs" :key="index">
            {{ pref.name }}
          </option>
        </select>
      </div>
      <div class="column">
        <label class="label">地域</label>
        <select v-model="curCity">
          <option
            v-for="(city, index) in citys()"
            :value="city.id"
            :key="index"
          >
            {{ city.name }}
          </option>
        </select>
      </div>
      <div class="column">
        <button :class="btnClass" @click="getWeather" :disabled="canSendBtn">
          取得
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prefs: this.$INFO_TBL.prefs,
    };
  },
  computed: {
    btnClass() {
      return {
        button: true,
        "is-primary": true,
        "is-loading": this.loading(),
      };
    },
    canSendBtn() {
      return this.curPref && this.curCity && !this.loading() ? false : true;
    },
    curPref: {
      get() {
        return this.$store.getters["curPref"];
      },
      set(value) {
        this.$store.dispatch("setCurPref", value);
      },
    },
    curCity: {
      get() {
        return this.$store.getters["curCity"];
      },
      set(value) {
        this.$store.dispatch("setCurCity", value);
      },
    },
  },
  methods: {
    citys() {
      return this.$store.getters["citys"];
    },
    loading() {
      return this.$store.getters["loading"];
    },
    prefChange() {
      let pref = this.prefs.filter((current) => current.name === this.curPref);
      if (pref.length != 0) {
        this.$store.dispatch("setCitys", pref[0].citys);
        this.$store.dispatch("setCurCity", null);
      }
    },
    getWeather() {
      this.$store.dispatch("getWeather", this.$axios);
    },
  },
};
</script>
