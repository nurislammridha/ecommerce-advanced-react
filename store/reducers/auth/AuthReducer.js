import * as Types from "../../Types";

// Initial state
const initialState = {
  loginInpiut: {
    email: '',
    password: '',
  },
  isLoggedIn: false,
  userData: {},
  tokenData: "",
  loginMessage: "",
  registerMessage: "",
  isLoading: false,
  isLoadingRegister: false,
  registrationStatus: false,
  redirected_route: null,
  loginLoading: false,
  isLogging: false,

};

const AuthReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.CHANGE_LOGIN_INPUT_FIELD:
      const loginInpiut = { ...state.loginInpiut };
      loginInpiut[action.payload.name] = action.payload.value;
      return {
        ...state,
        loginInpiut
      };
    case Types.AUTH_LOGIN_CHECK:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userData: action.payload.userData,
        tokenData: action.payload.tokenData,
        loginMessage: action.payload.loginMessage,
        isLoading: action.payload.isLoading,
        isLogging: action.payload.isLogging,
      };
    case Types.EMPTY_DISPATCH:
      return {
        isLogging: action.payload
      }
    case Types.AUTH_GET_LOGIN_DATA:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userData: action.payload.userData,
        tokenData: action.payload.tokenData,
      };

    case Types.AUTH_POST_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        tokenData: "",
        userData: {},
        loginMessage: "",
        isLoading: false,
      };

    default:
      break;
  }
  return newState;
};

export default AuthReducer;
