import axios from "axios";
var initState={
    cinemas:localStorage.cinemas?JSON.parse(localStorage.cinemas).cinemas:[],
    brand:{},
    district:{},
    hallType:{},
    service:{},
    subway:{},
    timeRanges:{},
    cinemaTitle:localStorage.cinemaTitle?JSON.parse(localStorage.cinemaTitle):{}
}
const reducer=(state=initState,actions)=>{
    var newState={...state}
    if(actions.type==="DISPLAY"){
        var url_cinemas="/v3/ajax/cinemaList?day=2019-06-26&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1561531821115&cityId=1"
        var url="/v3/ajax/filterCinemas?ci=1";
        axios.get(url_cinemas).then((res)=>{
            newState.cinemas=res.data.cinemas
            localStorage.cinemas=JSON.stringify(newState.cinemas)
        })
        axios.get(url).then((res)=>{
            newState.brand=res.data.brand;
            newState.district=res.data.district;
            newState.hallType=res.data.hallType;
            newState.service=res.data.service;
            newState.subway=res.data.subway;
            newState.timeRanges=res.data.timeRanges;
            localStorage.brand=JSON.stringify(newState.brand)
            localStorage.district=JSON.stringify(newState.district)
            localStorage.hallType=JSON.stringify(newState.hallType)
            localStorage.service=JSON.stringify(newState.service)
            localStorage.subway=JSON.stringify(newState.subway)
            localStorage.timeRanges=JSON.stringify(newState.timeRanges)
        })
    }else if(actions.type==="GODETAILSPAGE"){
        if(actions.id){
            for(var i=0,l=newState.cinemas.length;i<l;i++){
                if(newState.cinemas[i].id===actions.id){
                    newState.cinemaTitle=newState.cinemas[i];
                    localStorage.cinemaTitle=JSON.stringify(newState.cinemaTitle)
                }
            }
        }
    }
    return newState
}
export default reducer;