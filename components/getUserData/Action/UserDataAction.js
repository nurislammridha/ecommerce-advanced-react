import * as Types from "../Types/Types";

export const getUserDataAction = () => async (dispatch) => {
    // dispatch({ type: Types.GET_CARTS_LOADING, payload: true });
    const data = getUserData();
    dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
  };

function getUserData() {
    const userStorageData = localStorage.getItem("loginData");
    let data = {
      userData: {},
      tokenData: null,
    };
  
    if (typeof userStorageData !== "undefined" && userStorageData !== null) {
      data.userData = JSON.parse(userStorageData.userData);
      data.tokenData = JSON.parse(userStorageData.tokenData);
    }
    return data;
  }