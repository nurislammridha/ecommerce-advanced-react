import * as Types from "../../Types";
import Axios from "axios";
import { showToast } from "../../../components/master/Helper/ToastHelper";

export const changeUserUpdateInput = (name, value) => async (dispatch) => {
  const updateData = {
    name: name,
    value: value
  }
  dispatch({ type: Types.CHANGE_USER_INPUT_DATA, payload: updateData });
};
//updated user    
export const updatedUserData = (userInputData, userData) => (dispatch) => {
  console.log('userInputData :>> ', userInputData);
  let response = {
    isLoading: true,
    status: false,
    data: null
  }
  dispatch({ type: Types.UPDATED_USER_DATA, payload: response })
  const URL = `${process.env.NEXT_PUBLIC_API_URL}updateUserProfile`;
  Axios.put(URL, userInputData)
      .then((res) => {
        console.log('res :>> ', res);
        if (res.data.status) {
          const { data } = res.data;
          response.data = data.user;
          response.isLoading = false;
          dispatch({ type: Types.UPDATED_USER_DATA, payload: response });
        }
      })
      .catch((error) => {
        const responseLog = error.response;
        response.isLoading = false;
        if (typeof responseLog !== 'undefined') {
          const { request, ...errorObject } = responseLog;
          console.log('responseLog :>> ', responseLog);
          // showToast('error', responseLog.data.message);
          dispatch({ type: Types.UPDATED_USER_DATA, payload: responseLog })
        }
      })
  dispatch({ type: Types.UPDATED_USER_DATA, payload: response })
}