import axios from "axios";
export default {
    handlePutback(){
        return {
            type:"PUTBACK",
        }
    },
    handleGetCinemaDetail(id){
        return (dispatch)=>{
            console.log(id,2342342)
            var url_cinemaDetail="/v3/ajax/cinemaDetail?cinemaId="+id
            axios.get(url_cinemaDetail).then((res)=>{
                dispatch({
                    type:"GETCINEMADETAIL",
                    res
                })
            })
        }
    }
}