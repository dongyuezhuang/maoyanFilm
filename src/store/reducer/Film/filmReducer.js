
var initState = {
    list: [],
    coming: [],
    Times: [],
    cinemas: localStorage.cinemas ? JSON.parse(localStorage.cinemas).cinemas : [],
    brand: {},
    district: {},
    hallType: {},
    service: {},
    subway: {},
    timeRanges: {},
    cine:{},
    cinemaTitle: localStorage.cinemaTitle ? JSON.parse(localStorage.cinemaTitle) : {},
    detailMovie:localStorage.detailMovie?JSON.parse(localStorage.detailMovie):{},
}
const reducer = (state = initState, actions) => {
    var newState = { ...state }
    if (actions.type === "DATA") {
        newState.list = actions.list;
    }
    if (actions.type === "DATAS") {
        newState.coming = actions.coming;
    }
    if (actions.type === "TIMES") {
        newState.Times = actions.Times;
    }
    if (actions.type === "DISPLAY") {
        newState.brand = actions.brand;
        localStorage.brand=JSON.stringify(newState.brand);
        newState.district = actions.district;
        localStorage.district=JSON.stringify(newState.district);
        newState.hallType = actions.hallType;
        localStorage.hallType=JSON.stringify(newState.hallType);
        newState.service = actions.service;
        localStorage.service=JSON.stringify(newState.service);
        newState.subway = actions.subway;
        localStorage.subway=JSON.stringify(newState.subway);
        newState.timeRanges = actions.timeRanges;
        localStorage.timeRanges=JSON.stringify(newState.timeRanges); 
    }
    if(actions.type === "GO"){
        newState.detailMovie = actions.detailMovie;
        localStorage.detailMovie=JSON.stringify(newState.detailMovie);
    }
    if(actions.type === "CINE"){
        newState.cine = actions.cine;
    }
    return newState
}
export default reducer;