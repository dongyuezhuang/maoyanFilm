import axios from 'axios';
export default {
	getData() {
		return (dispatch) => {
			axios.get("/v3/ajax/movieOnInfoList?token=").then((res) => {

				dispatch({
					type: "DATA",
					list: res.data
				})
			})
		}
	},
	getDatas() {
		return (dispatch) => {
			axios.get("/v3/ajax/mostExpected?ci=1&limit=10&offset=0&token=").then((res) => {
				console.log(res)
				dispatch({
					type: "DATAS",
					coming: res.data
				})
			})
		}
	},
	getTimes() {
		return (dispatch) => {
			axios.get("/v3/ajax/comingList?ci=1&token=&limit=10").then((res) => {
				console.log(res.data.coming);
				dispatch({
					type: "TIMES",
					Times: res.data.coming
				})
			})
		}
	},
	getGo(id) {
		console.log(id)
		return (dispatch) => {
			axios.get("/v3/ajax/detailmovie?movieId=" + id).then((res) => {
				console.log(res)
				dispatch({
					type:"GO",
					detailMovie:res.data,
				})
			})
		}
	},
	handleDisplay() {
			return(dispatch)=>{
				axios.get("/v3/ajax/filterCinemas?movieId=1198925&day=2019-06-28").then((res) => {
					dispatch({
						type: "DISPLAY",
						brand : res.data.brand,
						district : res.data.district,
						hallType : res.data.hallType,
						service : res.data.service,
						subway : res.data.subway,
						timeRanges : res.data.timeRanges,
					})
					
				})

		}
	},
	handleCine(){
		return(dispatch)=>{
			axios.post("/v3/ajax/movie?forceUpdate=1561716543531",{params:{
					"movieId": 1198925,
					"day": "2019-06-28",
					"offset": 0,
					"limit": 20,
					"districtId": -1,
					"lineId": -1,
					"hallType": -1,
					"brandId": -1,
					"serviceId": -1,
					"areaId": -1,
					"stationId": -1,
					"updateShowDay": true,
					"reqId": 1561715574910,
			
					"cityId": 1,
				}
			}).then((res)=>{
				// console.log(res.data)
				dispatch({
					type:"CINE",
					cine:res.data
				})
			})
		}
	}
}