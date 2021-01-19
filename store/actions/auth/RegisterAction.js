import * as Types from "../../Types";
import * as JwtDecode from "jwt-decode";
// import { generateToken } from "../../services/token/TokenService";

import axios from "axios";
import { API_POST_REGISTER } from "../../ApiEndpoint";
import { showToast } from "../../../components/master/Helper/ToastHelper";


//handle change register input field 
export const ChangeRegisterInputField = (name, value) => (dispatch) => {
  const registerData = {
    name: name,
    value: value
  }
  dispatch({ type: Types.CHANGE_REGISTER_INPUT_FIELD, payload: registerData })
}

// handle register first step 
export const handleRegisterFirstStep = (registerInput, setStepNo) => (dispatch) => {
  if (registerInput.first_name.length === 0) {
    showToast('error', "First name can't be blank!")
    return false;
  }
  if (registerInput.last_name.length === 0) {
    showToast('error', "Last name can't be blank!")
    return false;
  }
  if (registerInput.phone_no === null) {
    showToast('error', "Mobile number can't be blank!")
    return false;
  }
  showToast('success', "Check your phone, we sent you a one time password")
  setStepNo(2)
}

// customer register step two / final 
export const customerRegister = (registerInput) => (dispatch) => {
  
}
export const registerAction = (registerData) => async (dispatch) => {
  console.log("registerData", registerData);
  return 1;
  let loginResponse = {
    userData: {},
    tokenData: {},
    isLoggedIn: false,
    loginMessage: "",
    isLoading: false,
  };

  try {
    loginResponse.isLoading = true;
    dispatch({ type: Types.AUTH_REGISTER, payload: loginResponse });

    const res = await axios.post(`${API_POST_REGISTER}`, registerData);
    // Successfully Logged in
    loginResponse = {
      userData: res.data.user,
      tokenData: res.data.access_token,
      isLoggedIn: res.data.status,
      loginMessage: res.data.message,
      isLoading: false,
    };
    localStorage.setItem("loginData", JSON.stringify(loginResponse));
    dispatch({ type: Types.AUTH_REGISTER, payload: loginResponse });
  } catch (error) {
    // loginResponse
    dispatch({ type: Types.AUTH_REGISTER, payload: loginResponse });
  }
};
