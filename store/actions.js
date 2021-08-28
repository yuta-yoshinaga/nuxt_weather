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
}