import axios from "axios"
import { FAIL, SUCCESS } from "./restconst";





//dispatchable function o acess datas

export const getData = async (dispatch) => {

    try {
        const { data } = await axios.get('/Hotels.json')
        //dispatch(data.hotels)
        //console.log(data.hotels);

        dispatch(
            {
                payload: data.hotels,
                type:SUCCESS
            }
        )


    }

    catch(err) {
        dispatch(
            {
                payload: err,
                type:FAIL
            }
        )
    }

}