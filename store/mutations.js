export default {
    current: (state, setCurrent) => {
        state.current = setCurrent;
    },
    currentDate: (state, setCurrentDate) => {
        state.currentDate = setCurrentDate;
    },
    curWether: (state, setCurWether) => {
        state.curWether = setCurWether;
    },
    hasError: (state, setHasError) => {
        state.hasError = setHasError;
    },
    errorMessage: (state, setErrorMessage) => {
        state.errorMessage = setErrorMessage;
    },
    citys: (state, setCitys) => {
        state.citys = setCitys;
    },
    curPref: (state, setCurPref) => {
        state.curPref = setCurPref;
    },
    curCity: (state, setCurCity) => {
        state.curCity = setCurCity;
    },
    loading: (state, setLoading) => {
        state.loading = setLoading;
    },
}