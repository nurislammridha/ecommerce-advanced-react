import * as Types from "../../Types";
import Axios from "axios";
import { showToast } from "../../../components/master/Helper/ToastHelper";
import { getUserDataAction } from "../../../components/getUserData/Action/UserDataAction";

export const changeUserUpdateInput = (name, value) => async (dispatch) => {
  const updateData = {
    name: name,
    value: value
  }
  dispatch({ type: Types.CHANGE_USER_INPUT_DATA, payload: updateData });
};
//updated user    
export const updatedUserData = (userInputData, userData) => (dispatch) => {
  let response = {
    isLoading: true,
    status: false,
    data: null
  }
  dispatch({ type: Types.UPDATED_USER_DATA, payload: response })
  userInputData.userData = userData.userData;
  userInputData.username = userData.username;
  const URL = `${process.env.NEXT_PUBLIC_API_URL}auth/updateUserProfile`;
  Axios.put(URL, userInputData)
    .then((res) => {

      if (res.data.status) {
        const { data } = res.data;
        response.data = data;
        response.isLoading = false;
        const userData = {
          userData: response.data
        }

        localStorage.setItem("loginData", JSON.stringify(userData));
        dispatch(handleSetDataIntoInputField())
        dispatch(getUserDataAction())
        showToast('success', res.data.message);
        dispatch({ type: Types.UPDATED_USER_DATA, payload: response });
      }
    })
    .catch((error) => {
      const responseLog = error.response;
      response.isLoading = false;
      if (typeof responseLog !== 'undefined') {
        const { request, ...errorObject } = responseLog;
        showToast('error', responseLog.data.message);
        dispatch({ type: Types.UPDATED_USER_DATA, payload: responseLog })
      }
    })
  dispatch({ type: Types.UPDATED_USER_DATA, payload: response })
}

// get user data for set input field 
export const handleSetDataIntoInputField = () => (dispatch) => {
  const userStorageData = JSON.parse(localStorage.getItem("loginData"));
  dispatch({ type: Types.GET_USER_UPDATED_DATA, payload: userStorageData.userData })

}