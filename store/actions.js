export default {
    setCurrent: ({ commit }, current) => {
        commit("current", current);
    },
    setCurrentDate: ({ commit }, currentDate) => {
        commit("currentDate", currentDate);
    },
    setCurWether: ({ commit }, curWether) => {
        commit("curWether", curWether);
    },
    setHasError: ({ commit }, hasError) => {
        commit("hasError", hasError);
    },
    setErrorMessage: ({ commit }, errorMessage) => {
        commit("errorMessage", errorMessage);
    },
    setCitys: ({ commit }, citys) => {
        commit("citys", citys);
    },
    setCurPref: ({ commit }, curPref) => {
        commit("curPref", curPref);
    },
    setCurCity: ({ commit }, curCity) => {
        commit("curCity", curCity);
    },
    setLoading: ({ commit }, loading) => {
        commit("loading", loading);
    },
    getWeather: ({ state, dispatch }, $axios) => {
        dispatch("setHasError", false);
        dispatch("setErrorMessage", "");
        dispatch("setCurWether", null);
        dispatch("setLoading", true);
        $axios
            .get(
                "https://weather.tsukumijima.net/api/forecast/city/" + state.curCity
            )
            .then(
                function (response) {
                    if (response.data) {
                        if (response.data.error) {
                            dispatch("setHasError", true);
                            dispatch("setErrorMessage", response.data.error);
                        } else {
                            // API戻り値を設定
                            dispatch("setCurWether", response.data);
                        }
                    }
                }
            )
            .catch(
                function (error) {
                    dispatch("setHasError", true);
                    dispatch("setErrorMessage", response.data.error);
                }
            )
            .finally(
                function () {
                    dispatch("setLoading", false);
                }
            );
    },
}