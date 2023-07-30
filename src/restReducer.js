import { FAIL, SUCCESS } from "./restconst"




//reducer state=variable used to store reducer, action: argument used for the action going tobe happen
export const restReducer = (state = { restList: [] }, action) => {

    switch (action.type) {
        case SUCCESS:
            return {
                restList: action.payload
            }
        case FAIL:
            return {
                restList: action.payload
            }
        default:
            return {
                restList: state
            }
    }

}