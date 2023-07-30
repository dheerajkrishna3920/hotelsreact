import { applyMiddleware,  combineReducers,  createStore } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./restReducer";


//reducer
const reducer = combineReducers({

    reducer1 : restReducer
})



//create middleware
const middleware = [thunk]


//creating store
const store = createStore(reducer, applyMiddleware(...middleware)) //spread operator is used to crate more middlewares in future


//export
export default  store