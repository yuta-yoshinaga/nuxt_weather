export default () => ({
    componentTypes: {
        list: "component-list",
        detail: "component-detail",
    },
    current: "",
    currentDate: "",
    curWether: null,
    hasError: false,
    errorMessage: "",
    citys: null,
    curPref: null,
    curCity: null,
    loading: false,
})