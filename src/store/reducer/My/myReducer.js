var initState={
    one:100,
    two:200,
    three:300,
    num:0,
    obj:{
        one:1,
        two:1,
        three:1,
    },
    price:{
        one:100,
        two:200,
        three:300,
    }
}
const reducer=(state=initState,actions)=>{
    var newState={...state}
    
    return newState
}
export default reducer;