import * as Types from "../Types/Types";
import Axios from "axios"
import { showToast } from "../../../master/Helper/ToastHelper";

export const WishListAdded = (itemID) => (dispatch) => {
    const response = {
        isLoading: true,
        status: false,
        data: null
    }
    dispatch({ type: Types.WISHLIST_ADDED, payload: response });
    const postData = {
        item_id: itemID
    }
    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}wishlist`, postData)
        .then((response) => {
            if (response.data.status) {
                response.isLoading = false;
                showToast('success', response.data.message);
                dispatch({ type: Types.WISHLIST_ADDED, payload: responseLog })
            }
        }).catch((error) => {
            const responseLog = error.response;
            response.isLoading = false;
            if (typeof responseLog !== 'undefined') {
                const { request, ...errorObject } = responseLog;
                showToast('error', responseLog.data.message);
                dispatch({ type: Types.WISHLIST_ADDED, payload: responseLog })
            }
        })
}