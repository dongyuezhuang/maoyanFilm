import {createStore,applyMiddleware} from "redux";
<<<<<<< HEAD
import thunk from "redux-thunk";
import reducer from "./reducer/reducer.js";
=======
import reducer from "./reducer/reducer.js";
import thunk from 'redux-thunk'
>>>>>>> xiao
const store=createStore(reducer,applyMiddleware(thunk));
export default store;