import {combineReducers} from "redux";
import filmReducer from "./Film/filmReducer.js";
import cinemaReducer from "./Cinema/cinemaReducer.js";
import myReducer from "./My/myReducer.js";
const reducer=combineReducers({
    film:filmReducer,
    cinema:cinemaReducer,
    my:myReducer
})
export default reducer;