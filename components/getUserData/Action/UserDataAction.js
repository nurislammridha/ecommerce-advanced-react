import * as Types from "../Types/Types";

export const getUserDataAction = () => async (dispatch) => {
  const data = getUserData();
  dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
};
//logout user    
export const handleLogoutUser = () => (dispatch) => {
  const logout = localStorage.removeItem('loginData');
  dispatch(getUserDataAction())
  dispatch({type: Types.LOGOUT_USER, payload: logout});
}

//updated user data in local localStorage

function getUserData() {
  const userStorageData = JSON.parse(localStorage.getItem("loginData"));
  let data = {
    userData: null,
    access_token: null,
  };

  if (typeof userStorageData !== "undefined" && userStorageData !== null) {
    data.userData = userStorageData.userData;
    data.access_token = userStorageData.tokenData;
  }
  return data;
}