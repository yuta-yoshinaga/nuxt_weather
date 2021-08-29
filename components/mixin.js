export default {
    methods: {
        getCurWether() {
            return this.$store.getters['curWether'];
        },
        getCurForecast() {
            let res = this.getCurWether().forecasts.filter(
                (current) => current.date === this.$store.getters['currentDate']
            );
            return res.length > 0 ? res[0] : null;
        },
    }
}