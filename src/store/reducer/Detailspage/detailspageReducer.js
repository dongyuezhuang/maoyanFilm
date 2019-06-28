import axios from "axios";
var initState={
    cinemaDetail:{},
    movies:[],
}
const reducer=(state=initState,actions)=>{
    var newState={...state}
    if(actions.type==="GETCINEMADETAIL"){
        console.log(55555555555,actions.res)
        newState.cinemaDetail=actions.res.data;
        newState.movies=actions.res.data.showData.movies;
    }
    return newState
}
export default reducer;



