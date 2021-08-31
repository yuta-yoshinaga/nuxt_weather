export default {
    component: (state) => {
        return state.componentTypes[state.current];
    },
    currentDate: (state) => {
        return state.currentDate;
    },
    curWether: (state) => {
        return state.curWether;
    },
    hasError: (state) => {
        return state.hasError;
    },
    errorMessage: (state) => {
        return state.errorMessage;
    },
    citys: (state) => {
        return state.citys;
    },
    curPref: (state) => {
        return state.curPref;
    },
    curCity: (state) => {
        return state.curCity;
    },
    loading: (state) => {
        return state.loading;
    },
}