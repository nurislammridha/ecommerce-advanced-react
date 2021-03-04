import * as Types from "../../Types";
import * as JwtDecode from "jwt-decode";
// import { generateToken } from "../../services/token/TokenService";
import axios from "axios";
import { showToast } from "../../../components/master/Helper/ToastHelper";
import { getUserDataAction } from "../../../components/getUserData/Action/UserDataAction";
// import { API_POST_LOGIN } from "../../ApiEndpoint";


export const handleLoginInput = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value
  }
  dispatch({ type: Types.CHANGE_LOGIN_INPUT_FIELD, payload: formData })
}

//Login 
export const loginAction = (loginData) => (dispatch) => {
  let response = {
    userData: {},
    tokenData: {},
    isLoggedIn: false,
    isLogging: false,
    loginMessage: "",
    isLoading: true,
  }
  dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: response })
  const URL = `${process.env.NEXT_PUBLIC_API_URL}auth/login`;
  try {
    axios.post(URL, loginData)
      .then((res) => {
        if (res.data.status) {
          const { data } = res.data;
          response.userData = data.user;
          response.tokenData = data.access_token;
          response.message = res.data.message;
          response.isLoading = false;
          response.isLogging = true;
          localStorage.setItem("loginData", JSON.stringify(response));
          localStorage.setItem("access_token", response.tokenData);
          dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: response });
          dispatch(getUserDataAction())
        }
      })
      .catch((error) => {
        const responseLog = error.response;
        response.isLoading = false;
        if (typeof responseLog !== 'undefined') {
          const { request, ...errorObject } = responseLog;
          showToast('error', responseLog.data.message);
          dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: responseLog })
        }
      })
  } catch (error) {
    response.isLoading = false;
    showToast('error', 'Network Error, Please Fix this !');
  }
  dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: response })
}

export const emptyDispatch = () => (dispatch) => {
  const isLogging = false;
  dispatch({ type: Types.EMPTY_DISPATCH, payload: isLogging});
}

export const getAuthData = () => async (dispatch) => {
  let data = getLoginData();
  if (data !== null && typeof data !== "undefined" && data !== "") {
    if (checkTokenExpired()) {
      data.userData = "";
      data.isLoggedIn = false;
      data.tokenData = "";
    }
  } else {
    data = {};
    data.userData = "";
    data.isLoggedIn = false;
    data.tokenData = "";
  }
  dispatch({ type: Types.AUTH_GET_LOGIN_DATA, payload: data });
};

export const logoutUserData = () => (dispatch) => {
  localStorage.setItem("loginData", "");
  dispatch({ type: Types.AUTH_POST_LOGOUT, payload: true });
};

/**
 * checkTokenExpired
 *
 * Check if Jwt token is expred or not; true=>expired, false=>valid
 */
function checkTokenExpired() {
  var current_time = new Date().getTime() / 1000;
  let loginData = localStorage.getItem("loginData");
  let jwt = "";
  if (loginData !== null || typeof loginData !== "undefined") {
    loginData = JSON.parse(loginData);
    const token = loginData.tokenData;
    jwt = JwtDecode(token);
  }

  if (current_time > jwt.exp) {
    return true;
  }
  return false;
}

/**
 * getJwtToken
 *
 * Get jwt access token
 */
async function getJwtToken() {
  let loginData = localStorage.getItem("loginData");
  if (await !checkTokenExpired()) {
    return loginData.tokenData;
  } else {
    return null;
  }
}

function getLoginData() {
  let loginData = localStorage.getItem("loginData");
  if (
    loginData !== null &&
    typeof loginData !== "undefined" &&
    loginData != ""
  ) {
    loginData = JSON.parse(loginData);
  }
  return loginData;
}
