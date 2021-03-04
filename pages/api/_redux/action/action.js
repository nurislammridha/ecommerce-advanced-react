import * as Types from "../Types/Types";
import Axios from "axios";

export const getHomeSlider = () => async (dispatch) => {
    Axios.get(`${process.env.NEXT_PUBLIC_API_URL}sliders-frontend/`)
        .then((res) => {
            if (res.data.status) {
                dispatch({ type: Types.GET_HOME_CAROUSEL_LIST, payload: res.data.data })
            }
        })
}