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
      loading: false,
    };
  },
  computed: {
    btnClass() {
      return {
        button: true,
        "is-primary": true,
        "is-loading": this.loading,
      };
    },
    canSendBtn() {
      return this.curPref && this.curCity && !this.loading ? false : true;
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
    prefChange() {
      let pref = this.prefs.filter((current) => current.name === this.curPref);
      if (pref.length != 0) {
        this.$store.dispatch("setCitys", pref[0].citys);
        this.$store.dispatch("setCurCity", null);
      }
    },
    getWeather() {
      this.$store.dispatch("setHasError", false);
      this.$store.dispatch("setErrorMessage", "");
      this.$store.dispatch("setCurWether", null);
      this.loading = true;
      this.$axios
        .get(
          "https://weather.tsukumijima.net/api/forecast/city/" + this.curCity
        )
        .then(
          function (response) {
            if (response.data) {
              if (response.data.error) {
                this.$store.dispatch("setHasError", true);
                this.$store.dispatch("setErrorMessage", response.data.error);
              } else {
                // API戻り値を設定
                this.$store.dispatch("setCurWether", response.data);
              }
            }
          }.bind(this)
        )
        .catch(
          function (error) {
            this.$store.dispatch("setHasError", true);
            this.$store.dispatch("setErrorMessage", response.data.error);
          }.bind(this)
        )
        .finally(
          function () {
            this.loading = false;
          }.bind(this)
        );
    },
    daysChange: function (date) {
      // 現在の日付を設定
      this.$store.dispatch("setCurrentDate", date);

      // ページ切り替え
      this.$store.dispatch("setCurrent", "detail");
    },
  },
};
</script>
