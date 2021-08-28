export default {
    methods: {
        getCurWether() {
            return this.$store.getters['curWether'];
        },
        getHasError() {
            return this.$store.getters['hasError'];
        },
        getErrorMessage() {
            return this.$store.getters['errorMessage'];
        },
        getCurDate() {
            return this.$store.getters['currentDate'];
        },
        getCurForecast() {
            let res = this.getCurWether().forecasts.filter(
                (current) => current.date === this.getCurDate()
            );
            return res.length > 0 ? res[0] : null;
        },
    }
}