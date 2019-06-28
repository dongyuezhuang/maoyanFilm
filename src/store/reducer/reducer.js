import {combineReducers} from "redux";
import filmReducer from "./Film/filmReducer.js";
import cinemaReducer from "./Cinema/cinemaReducer.js";
import myReducer from "./My/myReducer.js";
import detailspageReducer from "./Detailspage/detailspageReducer.js";
const reducer=combineReducers({
    film:filmReducer,
    cinema:cinemaReducer,
    my:myReducer,
    detailspage:detailspageReducer,
})
export default reducer;